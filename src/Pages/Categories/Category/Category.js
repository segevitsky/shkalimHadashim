import React from "react";
import "./category.css";
import { generColor } from "../../../utils/utils";
import { Link, useHistory, Route } from "react-router-dom";

export default function Category({ name }) {
	const history = useHistory();

	const handleClick = () => {
		console.log("sdfsadsa");
		history.push(`/${name}`);
	};

	const color = generColor();
	console.log(color);

	return (
		<>
			<div
				className="category"
				onClick={handleClick}
				style={{ backgroundColor: color }}
			>
				<p> {name} </p>
			</div>
		</>
	);
}
