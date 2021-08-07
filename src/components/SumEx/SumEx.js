import React,{useState} from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from "styled-components";


import "./sumEx.css";

export default function SumEx({ sumIn, sumEx, cashFlow }) {
	const [expend, setExpend] = useState(false);
	return (
		<div className={ !expend ? "sum-income-out " : "sum-inout-full"}>
			<FaChevronDown style={{transform: !expend ? "rotateZ(180deg)" : "inherit", transition: "all 500ms ease" }} onClick={() => setExpend(!expend)} />
			<p>
				{" "}
				<strong> סה״כ הכנסות : </strong> {sumIn}{" "}
			</p>
			
			<p>
				{" "}
				<strong> סה״כ הוצאות : </strong> {sumEx}{" "}
			</p>

			<p className="free-income">
				{" "}
				<strong> הכנסה פנויה : </strong> {sumIn - sumEx}{" "}
			</p>

			<p className="cashFlow"> עו״ש : <strong> {cashFlow - (sumIn - sumEx)} </strong> </p>
		</div>
	);
}


