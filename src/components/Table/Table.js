import React, { useState, useEffect } from "react";
import Expenses from "../Expenses/Expenses";
import MonthSwitcher from "../MonthSwitcher/MonthSwitcher";
import PieChart from "../UI/Charts/PieChart/PieChart";
import styled from "styled-components";
import "./table.css";

export default function Table({
	expenses,
	incomes,
	deleteExpense,
	handleSubmit,
	edit,
	date,
	progressMonths,
	backMonths,
	currentMonth,
	setters,
}) {
	const [ex, setEx] = useState(false);
	return (
		<>
			<MonthSwitcher
				date={date}
				progressMonths={progressMonths}
				backMonths={backMonths}
				currentMonth={currentMonth}
			/>
			<div className="table">
				<button className="toggle-ex--btn" onClick={() => setEx(!ex)}>
					{" "}
					{ex ? "הוצאות" : "הכנסות"}
				</button>

				{!ex && (
					<ExpensesCont>
						<Expenses
							expenses={incomes}
							all={[expenses, incomes]}
							deleteExpense={deleteExpense}
							submit={handleSubmit}
							edit={edit}
							setters={setters}
						/>
					</ExpensesCont>
				)}

				{ex && (
					<ExpensesCont>
						<Expenses
							expenses={expenses}
							all={[expenses, incomes]}
							deleteExpense={deleteExpense}
							submit={handleSubmit}
							edit={edit}
							setters={setters}
						/>
					</ExpensesCont>
				)}
			</div>
		</>
	);
}

const ExpensesCont = styled.div`
	height: calc(100% + 10rem);
`;
