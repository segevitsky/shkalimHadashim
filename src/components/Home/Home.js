import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";
import Layout from "../UI/Layout/Layout";
import { getTables, getCashFlow } from "../api/oursAPI";
import { reduce, creatingYearData, myFilter } from "../../utils/utils";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Plus from "../Plus/Plus";
import ours from "../api/ours";
import "./Home.css";
import SumEx from "../SumEx/SumEx";

export default function Home() {
	const [showForm, setShowForm] = useState(false);
	const [things = [], setThings] = useState();
	const [tables = [], setTables] = useState();
	const [month, setMonth] = useState(new Date().getMonth() + 1 + "");
	const [date, setDate] = useState(new Date());
	const [tableNames = [], setTableNames] = useState();
	const [expenses, setExpenses] = useState([]);
	const [incomes, setIncomes] = useState([]);
	const [cashFlow, setCashFlow] = useState("");
	const [sumEx, setExSum] = useState(0);
	const [sumIn, setInSum] = useState(0);
	const history = useHistory();
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		// if (token) { return } else {
		// 	history.push("/login");
		// }
	}, [history, token]);

	useEffect(() => {
		(async function () {
			try {
				const tables = await getTables;
				//Consuming our new data from tables
				const allTables = Object.values(tables.data);
				//Date
				const getDate = (el) => el.monthNum === month;
				//Get cash cashFlow
				const cashFlow = await getCashFlow;
				console.log(cashFlow);
				setCashFlow(cashFlow.data);

				let thisYearData = allTables
					.map((el) => el["2021"])
					.map((el) => el["newYearEx"]);
				const thisMonthsData = thisYearData
					.map((el) => el.filter(getDate))
					.map((el) => el[0])
					.filter((el) => el !== undefined);

				console.log({ thisMonthsData });

				setThings(thisMonthsData);

				//Sorting our data
				const expensesFromServer = myFilter(thisMonthsData, "הוצאה");
				const incomesFromServer = myFilter(thisMonthsData, "הכנסה");

				setTableNames(Object.keys(tables.data));
				setTables(tables.data);
				setExpenses(expensesFromServer);
				setIncomes(incomesFromServer);
				setExSum(reduce(expensesFromServer));
				setInSum(reduce(incomesFromServer));
			} catch (e) {
				console.log(e, "this is our error");
				// history.push("/404");
			}
		})();
	}, [date, month]);

	const progressMonths = (e) => {
		if (month === 12) {
			setDate((prevDate) => +prevDate + 1);
			setMonth(1);
		}
		setMonth((prevMonth) => {
			console.log(+prevMonth + 1);
			return +prevMonth + 1 + "";
		});
	};

	const backMonths = () => {
		setMonth((prevMonth) => {
			console.log(+prevMonth - 1);
			return +prevMonth - 1 + "";
		});
	};

	const setNewExpensesAndIncomesAfterDelete = (item, id) => {
		let itemsToRender = [];
		if (expenses.includes(item)) {
			itemsToRender = expenses.filter((el) => el.id !== id);
			setExpenses(itemsToRender);
			setExSum((prevSum) => prevSum - item["amount"]);
		} else {
			itemsToRender = incomes.filter((el) => el.id !== id);
			setIncomes(itemsToRender);
			setInSum((prevSum) => prevSum - item["amount"]);
		}
	};

	const deleteExpense = async (id) => {
		const item = things.filter((el) => el.id === id)[0];
		let { monthNum } = item;
		const yearExpenses = creatingYearData(item);
		yearExpenses.filter((el) => el.monthNum !== monthNum);
		let newYearEx = yearExpenses.filter((el) => el.monthNum !== monthNum);

		setNewExpensesAndIncomesAfterDelete(item, id);
		console.log(process.env.REACT_APP_URL + `/tables/${item.name}/2021.json/`);
		ours
			.patch(process.env.REACT_APP_URL + `/tables/${item.name}/2021.json/`, {
				newYearEx,
			})
			.then((res) => console.log(res));
	};

	const handleSubmit = (values) => {
		const year = values?.date?.toLocaleDateString()?.slice(4);
		let newExpenses = [...expenses];
		let newIncomes = [...incomes];
		if (values.type === "הוצאה") {
			newExpenses.push(values);
			setExSum((prevSum) => prevSum + +values.amount);
			setExpenses(newExpenses);
		} else {
			newIncomes.push(values);
			setInSum((prevSum) => prevSum + +values.amount);
			setIncomes(newIncomes);
		}

		const newYearEx = creatingYearData(values);
		try {
			console.log({ newYearEx });
			ours.patch(
				process.env.REACT_APP_URL + `/tables/${values.name}/${year}.json/`,
				{ newYearEx }
			);
			setShowForm(false);
		} catch (e) {
			console.log(e);
		}
	};

	const editExpenseHandler = (obj) => {
		const updatedExpenses = expenses.map((el) =>
			el.id === obj.id ? { ...obj } : el
		);
		const updatedIncomes = incomes.map((el) =>
			el.id === obj.id ? { ...obj } : el
		);
		setExpenses(updatedExpenses);
		setIncomes(updatedIncomes);

		//Send to our server
		const newThings = [...updatedIncomes, ...updatedExpenses];
		console.log();
		setThings(newThings);
		// Change this to our route
		ours.patch(process.env.REACT_APP_URL + "/things.json", newThings);
	};

	return (
		<Layout>
			<div className="App">
				{showForm ? (
					<Form
						submit={handleSubmit}
						headline="טופס הכנצות"
						tables={tableNames}
						setShowForm={setShowForm}
						progressMonths={progressMonths}
						backMonths={backMonths}
						date={date}
						currentMonth={month}
					/>
				) : (
					<Plus showForm={() => setShowForm(true)} />
				)}
				<Table
					incomes={incomes}
					expenses={expenses}
					things={things}
					deleteExpense={deleteExpense}
					submit={handleSubmit}
					edit={editExpenseHandler}
					date={date}
					progressMonths={progressMonths}
					backMonths={backMonths}
					currentMonth={month}
					setters={[setExpenses, setIncomes]}
				/>
				{/* <Sketch /> */}
			</div>
			<SumEx sumIn={sumIn} sumEx={sumEx} cashFlow={cashFlow} />
		</Layout>
	);
}
