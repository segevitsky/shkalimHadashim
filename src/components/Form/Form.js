import React from "react";
//An instance to use for our get request//
import FormSignup from "./FormSignup";
import { history, useHistory } from "react-router-dom";
import "./formStyles.css";

const Form = ({ submit, headline, tables,setShowForm }) => {
	const history = useHistory();

	const navigationHandler = () => {
		history.push("/categories");
	};
	return (
		<>
			{/* <div className="form-container"> */}
				<FormSignup submitForm={submit} headline={headline} tables={tables} setShowForm={setShowForm}/>
				{/* <div className="categories-home" onClick={navigationHandler}> */}
					{/* {" "} */}
					{/* קטגוריות{" "} */}
				{/* </div> */}
			{/* </div> */}
		</>
	);
};

export default Form;
