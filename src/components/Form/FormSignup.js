import React, { useState, useEffect } from "react";
import validate from "./ValidateInfo";
import useForm from "../../hooks/useForm";
import "./formStyles.css";
import styled from "styled-components";
import { getMonths } from "../api/oursAPI";
import MonthSwitcher from "../MonthSwitcher/MonthSwitcher";

const FormSignup = ({
	submitForm,
	headline,
	tables,
	setShowForm,
	backMonths,
	progressMonths,
	date,
	currentMonth,
}) => {
	const [months, setMonths] = useState([]);
	const [month, setMonth] = useState(new Date().getMonth());
	console.log({ month });
	useEffect(() => {
		(async function () {
			try {
				const monthsData = await getMonths;
				const awaitedMonthesData = monthsData.data;
				let finalD = awaitedMonthesData.filter((el) => el !== null);
				console.log(finalD);
				setMonths(finalD);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		validate
	);

	const nameOptions = tables.map((el, i) => (
		<option key={el + i}> {el} </option>
	));

	return (
		// <div className="form-cont">
		<form
			onSubmit={handleSubmit}
			className="form"
			noValidate
			style={{ position: "relative" }}
		>
			<CloseBtn onClick={() => setShowForm(false)}> X </CloseBtn>
			<Headline> {headline} </Headline>
			<MonthSwitcher
				date={date}
				currentMonth={currentMonth}
				progressMonths={progressMonths}
				backMonths={backMonths}
			/>
			<div className="form-inputs">
				<label> בחר הוצאה או הכנסה: </label> <br></br>
				<select
					className="select-input"
					onChange={handleChange}
					name="type"
					value={values.type}
				>
					<option> ----- </option>
					<option> הכנסה </option>
					<option> הוצאה </option>
				</select>
				<br></br>
				{errors.type && <p> {errors.type} </p>}
			</div>
			<div className="form-inputs">
				<input
					className="form-input"
					type="text"
					name="name"
					placeholder="שם:"
					value={values.name}
					onChange={handleChange}
					list="tables-list"
					required
				/>
				<datalist id="tables-list" style={{ backgroundColor: "sandybrown" }}>
					{nameOptions}
				</datalist>
				{errors.name && <p>{errors.name}</p>}
			</div>

			<div className="form-inputs">
				<input
					className="form-input"
					type="number"
					name="amount"
					placeholder="סכום חודשי:"
					value={values.amount}
					onChange={handleChange}
					required
				/>
				{errors.amount && <p>{errors.amount}</p>}
			</div>

			<div className="radio-buttons">
				<select
					onChange={handleChange}
					placeholder="קבועה"
					name="constant"
					className="form-select"
					id="kind"
					value={values.constant}
				>
					<option value="empty"> ---- </option>
					<option value="constant"> רגילה </option>
					<option value="oneTime"> חד פעמית </option>
				</select>
			</div>
			{errors.constant && <p className="constant-error">{errors.constant}</p>}
			<button className="form-input-btn" type="submit" onSubmit={handleSubmit}>
				הוסף
			</button>
		</form>
		// </div>
	);
};

export default FormSignup;

const CloseBtn = styled.button`
	color: sandybrown;
	position: absolute;
	top: -1.25rem;
	right: -1.25rem;
	padding: 0.25em 0.5em;
`;

const Headline = styled.h3`
	color: sandybrown;
	margin-top: 1.25rem;
`;

const Select = styled.select`
	border: 0;
	border-bottom: 1px dashed sandybrown;
`;
