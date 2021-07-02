import React from "react";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faFunnelDollar,faHandHoldingUsd, faShekelSign  } from "@fortawesome/free-solid-svg-icons";
import "./layout.css";

export default function Layout({ children }) {
	return (
		<div>
			<Nav />

			<h1 className="header"> 
                <FontAwesomeIcon
					icon={faShekelSign}
					style={{
						cursor: "pointer",
						color: "white",
						transition: "all 350ms ease",
                        marginLeft: '.5rem'
					}}
				/>
                שקלים חדשים
            </h1>
			{children}
		</div>
	);
}
