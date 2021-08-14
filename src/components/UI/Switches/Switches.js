import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Switches = ({ nameOne, nameTwo, saveSelected, type, margin }) => {
	const [selectedButton, setSelectedButton] = useState({
		nameTwo: false,
		nameOne: true,
	});

	const clickHandler = () => {
		setSelectedButton((prevS) => {
			if (prevS.nameTwo === true) {
				saveSelected(nameOne, type);
				return { nameTwo: false, nameOne: true };
			}
			if (prevS.nameTwo === false) {
				saveSelected(nameTwo, type);
				return { nameTwo: true, nameOne: false };
			}
		});
	};

	return (
		<ButtonContainer margin={margin}>
			<Button
				name={nameOne}
				value={selectedButton.nameOne}
				selected={selectedButton}
				onClick={clickHandler}
			>
				{" "}
				{nameOne}{" "}
			</Button>
			<Button
				name={nameTwo}
				value={selectedButton.nameTwo}
				selected={selectedButton}
				onClick={clickHandler}
			>
				{" "}
				{nameTwo}{" "}
			</Button>
		</ButtonContainer>
	);
};

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-flow: row nowrap;
	margin-top: ${(props) => (props.margin ? "2rem" : 0)};
`;

const Button = styled.p`
	color: black;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	padding: 0.5rem 3.25rem;
	cursor: pointer;
	font-size: 0.8rem;
	transition: all 230ms linear;
	background-image: linear-gradient(298deg, tomato, #f8ab37);
	background-image: ${(props) =>
		props.value ? "linear-gradient(298deg, tomato, #f8ab37)" : "none"};
	opacity: ${(props) => (props.value ? 1 : 0.75)};
	transition: all 350ms linear;
`;
export default Switches;
