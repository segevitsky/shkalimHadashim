import React, { useState, useEffect } from "react";
import Expenses from "../Expenses/Expenses";
import MonthSwitcher from "../MonthSwitcher/MonthSwitcher";
import PieChart from "../UI/Charts/PieChart/PieChart";
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
	setters
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
					<div style={{ height: "300px" }}>
						<Expenses
							expenses={incomes}
							all={[expenses,incomes]}
							deleteExpense={deleteExpense}
							submit={handleSubmit}
							edit={edit}
							setters={setters}
						/>
						<PieChart
							data={incomes}
							className="expenses-chart"
							style={{ marginBottom: "3rem" }}
							className="pie"
						/>
					</div>
				)}

				{ex && (
					<div style={{ height: "300px" }}>
						<Expenses
							expenses={expenses}
							all={[expenses,incomes]}
							deleteExpense={deleteExpense}
							submit={handleSubmit}
							edit={edit}
							setters={setters}
						/>
						<PieChart
							data={expenses}
							className="incomes-chart"
							style={{ marginBottom: "3rem" }}
						/>
					</div>
				)}
			</div>
		</>
	);
}
