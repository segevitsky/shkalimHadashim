import React, { useState, useEffect } from "react";
import Expense from "./Expense/Expense";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Spinner from "../UI/Spinner/Spinner";
import "./expenses.css";


const messageStyle = {
	textAlign: "center",
	color: "indianred",
	marginTop: "2rem"
}
export default function Expenses(props) {
	const { expenses, deleteExpense, submit, edit, show, toggle, all, setters } = props;
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(expenses);
	}, [expenses]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const itemim = Array.from(items);
		const [reorderedItem] = itemim.splice(result.source.index, 1);
		itemim.splice(result.destination.index, 0, reorderedItem);
		setItems(itemim);
	};

	let expansesToScreen = <Spinner />;
	if (items?.length === 0) {
		expansesToScreen = <h3 style={messageStyle}> לא נמצאו פריטים, לחץ על הפלוס למטה להוסיף </h3> 
	}

	if (items?.length > 0) {
		expansesToScreen = items.map((ex, i) => {
			// console.log(items);
			return (
				<Draggable key={ex.id} draggableId={ex.id} index={i}>
					{(provided) => (
						<Expense
							innerRef={provided.innerRef}
							provided={provided}
							id={ex.id}
							amount={ex.amount}
							name={ex.name}
							type={ex.type}
							date={ex.date}
							constant={ex.constant}
							del={deleteExpense}
							submit={submit}
							edit={edit}
							shower={show}
							toggler={toggle}
							expenses={expenses}
							all={all}
							setters={setters}
						/>
					)}
				</Draggable>
			);
		});
	}
	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId="expensesIncomes">
				{(provided) => (
					<ul
						{...provided.droppableProps}
						ref={provided.innerRef}
						className="items-list"
					>
						{expansesToScreen}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	);
}
