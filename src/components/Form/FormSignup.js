import React, { useState, useEffect } from "react";
import validate from "./ValidateInfo";
import useForm from "../../hooks/useForm";
import "./formStyles.css";
import styled from "styled-components";
import { getMonths } from "../api/oursAPI";
import MonthSwitcher from "../MonthSwitcher/MonthSwitcher";
import Switches from "../UI/Switches/Switches";

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

	const { handleChange, handleSubmit, values, setValues, errors } = useForm(
		submitForm,
		validate,
		currentMonth
	);

	console.log({ setValues });

	const nameOptions = tables.map((el, i) => (
		<option key={el + i}> {el} </option>
	));

	const saveNewValues = (value, inputName) => {
		setValues({ ...values, [inputName]: value });
	};

	const setMonthNum = (currentMonth) => {
		setValues({ ...values, monthNum: currentMonth });
	};
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
				setMonthNum={setMonthNum}
			/>
			<div className="form-inputs">
				<Switches
					nameOne="הכנסה"
					nameTwo="הוצאה"
					saveSelected={saveNewValues}
					type="type"
					margin={false}
				/>
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

			<Switches
				nameOne="רגילה"
				nameTwo="קבועה"
				saveSelected={saveNewValues}
				type="constant"
				margin={true}
			/>
			{errors.constant && <p className="constant-error">{errors.constant}</p>}
			<Button className="form-input-btn" type="submit" onSubmit={handleSubmit}>
				הוסף
			</Button>
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
	border: 0;
	background-color: sandybrown;
	color: white;
	text-align: center;
	align-self: center;
	box-shadow: var(--bsT);
	outline: none;
	cursor: pointer;
	margin: 2rem;
`;

const Headline = styled.h3`
	color: sandybrown;
	margin-top: 1.25rem;
`;

const Button = styled.button`
	border: 1px solid black;
	border: 0;
	padding: 0.5em 4.5em;
	background-color: white;
	color: black;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(26, 53, 71, 0.07);
	text-align: center;
	align-self: center;
	outline: none;
	cursor: pointer;
	margin: 2rem;

	&:hover {
		box-shadow: 2px 2px rgba(0, 0, 0, 0.19);
	}
`;
