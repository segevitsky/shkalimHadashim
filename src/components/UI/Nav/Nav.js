import React from "react";
import useToggle from "../../../hooks/useToggle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Fade from "../Fade/Fade";
import "./nav.css";

export default function Nav() {
	const [open, toggle] = useToggle(false);
	return (
		<>
			<FontAwesomeIcon
				icon={faBars}
				onClick={toggle}
				style={{
					cursor: "pointer",
					color: "white",
					transition: "all 350ms ease",
					position: "absolute",
					top: "1rem",
					right: "1rem",
				}}
			/>
			<nav
				className="nav"
				style={{
					transform: !open ? "translateX(120rem)" : "translateX(0)",
					transition: "all 350ms ease",
					// clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 74%)",
				}}
			>
				<FontAwesomeIcon
					icon={faTimes}
					onClick={toggle}
					style={{
						cursor: "pointer",
						color: "white",
						transition: "all 350ms ease",
						position: "absolute",
						top: "1em",
						left: "1em",
					}}
				/>
				<ul className="nav-ul">
					<li className="nav-li">
						{" "}
						<Link to="/"> בית </Link>{" "}
					</li>
					<li className="nav-li">
						{" "}
						<Link to="/categories"> קטגוריות </Link>{" "}
					</li>
					<li className="nav-li">
						{" "}
						<Link to="/login"> התחברות \ הרשמה </Link>{" "}
					</li>
				</ul>
			</nav>
		</>
	);
}
