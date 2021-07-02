import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BsPlusCircle } from "react-icons/bs";
import styled, {keyframes} from 'styled-components';
// BsPlusCircle

const iconStyles = {
    color: "white",
    fontSize: "2.5rem",
}

export default function Plus({showForm}) {
    return (
        <IconDiv>
            <BsPlusCircle onClick={showForm} style={iconStyles}/>
        </IconDiv>
    )
}



const IconDiv = styled.div`
  text-align: center;
  padding: 0;
  text-align: center;
  margin-top: 1rem;
  position: fixed;
  bottom: 2rem;
  left: 1rem;
  z-index: 2;
`;
