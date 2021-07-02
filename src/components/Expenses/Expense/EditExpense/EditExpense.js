import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sendEditedExpenseToServer } from "../../../../utils/utils";
import "./EditExpense.css";

export default function EditExpense({
	toggle,
	thisExpnese,
	setters,
	all
}) {
	const { id, name, amount, type, date, constant, monthNum } = thisExpnese;
	const [data, setData] = useState({ id, name, amount, type, date, constant, monthNum });
	const [setExpenses, setIncomes] = setters
	const changeHandler = (e) => {
		if (!e.target) {
			setData((data) => ({ ...data, date: e }));
			return;
		}
		const { name, value } = e.target;
		setData((data) => ({ ...data, [name]: value }));
	};

	const submitEdit = async (e) => {
		e.preventDefault();
		try {
			await sendEditedExpenseToServer(data);
		} catch(e) {
			console.log(e)
		}
		if (type === "הוצאה") {
			const updatedExpenses = all[0].filter(el => el.id !== data.id)
			updatedExpenses.push(data);
			setExpenses(updatedExpenses);
		} else {
			const updatedIncomes = all[1].filter(el => el.id !== data.id)
			updatedIncomes.push(data);
			setIncomes(updatedIncomes);
		}
		toggle();
	};

	return (
		<li className="edit-expense">
			<form onSubmit={submitEdit}>
				<p className='edit-name'> {data.name}</p>
				<label>
					סכום:
					<input
						value={data.amount}
						className="edit-input"
						onChange={changeHandler}
						name="amount"
						style={{ textDecoration: "underline" }}
					/>
				</label>
				<div className="radio-buttons">
					<label>
						קבועה
						<input
							type="radio"
							placeholder="קבועה"
							onChange={changeHandler}
							name="kindOfEx"
							className="radio-input"
							id="permanent"
							value={data.constant}
							style={{ marginLeft: "1rem" }}
						/>
					</label>
					<label>
						משתנה:
						<input
							type="radio"
							placeholder="קבועה"
							onChange={changeHandler}
							name="kindOfEx"
							className="radio-input"
							id="changing"
							value={data.constant}
						/>
					</label>
				</div>
				<label> תאריך: </label>
				<DatePicker selected={new Date(data.date)} onChange={changeHandler} />
				<button className="edit-btn"> שלח </button>
			</form>
		</li>
	);
}
