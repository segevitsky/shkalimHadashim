import * as R from 'react';
import Layout from '../UI/Layout/Layout';
import styled, {keyframes} from "styled-components";

const Onboarding = () => {
    const [ step, setStep ] = R.useState(0);

    const generateStage = (step) => {
        if (step === 1) {
            console.log(step);
        }
    }
    
    return (
        <Layout>
            <Header> ברוכים הבאים לשקלים חדשים</Header>
            <P> מה שלא כתוב לא קרה </P>
            <LetsStart> בוא נתחיל! </LetsStart>
        </Layout>
    )
};

export default Onboarding;

const bounceInDown = keyframes`
    0% {
    //    opacity: 0;
       transform: translateY(-100px);
    }
    60% {
    //    opacity: 1;
       transform: translateY(130px);
    }
    80% {
       transform: translateY(-10px);
    }
    100% {
       transform: translateY(0);
    }
`;

const Header = styled.h1`
        color: black§;
        text-align: center;
        padding: 1rem;
        font-weight: 100;
        letter-spacing: 6px;
`

const P = styled.p`
    background: #0096889c;
    padding: 2rem;
    text-align: center;
    border-radius: 50%;
    height: 175px;
    width: 175px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    animation: ${bounceInDown} 3s infinite alternate;
`

const LetsStart = styled.button`
	border: 0;
	background: transparent;
	width: 60%;
	border: 2.5px solid black;
	padding: 1rem 2rem;
    text-align: center;
    display: block;
    position: fixed;
    bottom: 5rem;
    right: 22%;
    cursor: pointer;
    font-weight: bold;
    font-size: 2rem;
`