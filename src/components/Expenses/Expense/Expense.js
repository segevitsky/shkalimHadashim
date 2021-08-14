import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Fade from "../../UI/Fade/Fade";
import useToggle from "../../../hooks/useToggle";
import EditExpense from "./EditExpense/EditExpense";
import "./expense.css";

export default function Expense(props) {
	const [show, toggle] = useToggle(false);
	const {
		name,
		amount,
		type,
		date,
		constant,
		del,
		id,
		submit,
		edit,
		innerRef,
		provided,
		expenses,
		setters,
		all,
	} = props;

	let formatDate;
	if (typeof date === "string") {
		formatDate = date.slice(0, 10);
	} else {
		formatDate = date.toISOString().slice(0, 10);
	}

	console.log(expenses, id);
	const thisExpnese = expenses.filter((el) => el.id === id)[0];
	return (
		<>
			<li
				className="expense"
				ref={innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				// style={{ backgroundColor: type === "הוצאה" ? "#c2c2" : "#c4c4" }}
			>
				<p> {name} </p>
				<p> {amount} </p>
				{/* <p> {formatDate} </p> */}

				<FontAwesomeIcon
					icon={faPencilAlt}
					onClick={toggle}
					style={{ cursor: "pointer" }}
				/>

				<FontAwesomeIcon
					icon={faTrashAlt}
					onClick={() => del(id)}
					style={{ cursor: "pointer" }}
				/>
			</li>

			<Fade show={show}>
				<EditExpense
					name={name}
					amount={amount}
					date={date}
					type={type}
					submit={submit}
					key={id}
					id={id}
					edit={edit}
					toggle={toggle}
					constant={constant}
					thisExpnese={thisExpnese}
					expenses={expenses}
					setters={setters}
					all={all}
				/>
			</Fade>
		</>
	);
}
