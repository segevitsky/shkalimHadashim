import React, { useState, useEffect } from "react";
import { getMonths } from "../api/oursAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./monthSwitcher.css";

export default function MonthSwitcher({
	date,
	progressMonths = "",
	backMonths = "",
	currentMonth,
}) {
	const [months, setMonths] = useState([]);
	const [monthName, setMonthName] = useState("");

	// console.log(currentMonth);
	useEffect(() => {
		(async function () {
			try {
				const monthsData = await getMonths;
				const awaitedMonthesData = monthsData.data;
				let finalD = awaitedMonthesData.filter((el) => el !== null);
				console.log(finalD);
				const dateObj = finalD[currentMonth - 1];
				setMonthName(dateObj["name"]);
				setMonths(finalD);
			} catch (e) {
				console.log(e);
			}
		})();
	}, [date, currentMonth]);

	return (
		<div className="month-switcher">
			<FontAwesomeIcon
				icon={faArrowRight}
				onClick={backMonths}
				style={{
					cursor: "pointer",
					color: "sandybrown",
					transition: "all 350ms ease",
				}}
			/>
			<p className="month">
				{" "}
				{monthName} {date.getFullYear()}{" "}
			</p>
			<FontAwesomeIcon
				onClick={progressMonths}
				icon={faArrowLeft}
				style={{
					cursor: "pointer",
					color: "sandybrown",
					transition: "all 350ms ease",
				}}
			/>
		</div>
	);
}
