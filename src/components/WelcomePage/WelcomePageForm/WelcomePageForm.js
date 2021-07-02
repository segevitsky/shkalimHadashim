import React, {useState} from "react";
import "./welcomePageForm.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function WelcomePageForm({
	handleSubmit,
	emailRef,
	passwordRef,
	loading,
	error,
}) {
	const [password, setPassword] = useState(false);
	return (
		<form className="welcome-form" onSubmit={handleSubmit}>
			<h3 className="welcome-head"> שקלים חדשים </h3>
			<div className="welcome-input one">
				<input type="text" placeholder="כתובת אימייל" ref={emailRef} />
				<p className="p"> שכחת את כתובת האימייל שלך? </p>
			</div>
			<div className="welcome-input two">
				{ !password ? <FaEye className="eye" onClick={() => setPassword(!password)}/> : <FaEyeSlash className="eye" onClick={() => setPassword(!password)}/> }
				<input type={ !password ? "password" : "text"} placeholder="סיסמא שזורמת לכם" ref={passwordRef} />
				{  }
				<p className="p"> שכחת את הסיסמא שלך? </p>

			</div>

			<button disabled={loading} className="welcome-btn">
				{" "}
				הבא{" "}
			</button>
			{error && <p className="error-message"> {error} </p>}
		</form>
	);
}
