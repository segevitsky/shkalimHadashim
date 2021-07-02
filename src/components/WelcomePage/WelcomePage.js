import React, { useRef, useState } from "react";
import "./welcomePage.css";
import WelcomePageForm from "./WelcomePageForm/WelcomePageForm";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserToken } from '../../Store/actions/authActions';

export default function WelcomePage() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	async function handleSubmit(e) {
		console.log(e.target);
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			let credCheck = await login(emailRef.current.value, passwordRef.current.value);
			console.log(credCheck);
			console.log(credCheck.user.uid);
			dispatch(saveUserToken(credCheck?.user?.uid))
			history.push("/");
		} catch {
			setError("שגיאה אבא, בדוק את השם משתמש והסיסמא");
		}

		setLoading(false);
	}

	return (
		<div className="welcome-main-wrapper">
			<div className="welcome">
				<WelcomePageForm
					handleSubmit={handleSubmit}
					loading={loading}
					emailRef={emailRef}
					passwordRef={passwordRef}
					error={error}
				/>
				<p className="go-to-signup"> עוד אין לך חשבון? לחץ כאן</p>
			</div>

			{/* <div className="signUp">
				<WelcomePageForm
					handleSubmit={handleSubmit}
					loading={loading}
					emailRef={emailRef}
					passwordRef={passwordRef}
					error={error}
					style={{}}
				/>
			</div> */}

			<div className="left">
				<h3> שקלים חדשים </h3>
				<p className="left-p"> דרך חדשה לנהל את המשק בית שלך</p>
			</div>
			<svg
				style={{ position: "fixed", bottom: 0 }}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
				fill="sandybrown"
				fillOpacity="1"
				d="M0,256L6.2,234.7C12.3,213,25,171,37,144C49.2,117,62,107,74,117.3C86.2,128,98,160,111,160C123.1,160,135,128,148,133.3C160,139,172,181,185,165.3C196.9,149,209,75,222,53.3C233.8,32,246,64,258,85.3C270.8,107,283,117,295,154.7C307.7,192,320,256,332,282.7C344.6,309,357,299,369,256C381.5,213,394,139,406,96C418.5,53,431,43,443,58.7C455.4,75,468,117,480,122.7C492.3,128,505,96,517,85.3C529.2,75,542,85,554,85.3C566.2,85,578,75,591,85.3C603.1,96,615,128,628,117.3C640,107,652,53,665,80C676.9,107,689,213,702,245.3C713.8,277,726,235,738,192C750.8,149,763,107,775,128C787.7,149,800,235,812,261.3C824.6,288,837,256,849,245.3C861.5,235,874,245,886,229.3C898.5,213,911,171,923,165.3C935.4,160,948,192,960,208C972.3,224,985,224,997,192C1009.2,160,1022,96,1034,58.7C1046.2,21,1058,11,1071,10.7C1083.1,11,1095,21,1108,74.7C1120,128,1132,224,1145,261.3C1156.9,299,1169,277,1182,234.7C1193.8,192,1206,128,1218,128C1230.8,128,1243,192,1255,234.7C1267.7,277,1280,299,1292,261.3C1304.6,224,1317,128,1329,112C1341.5,96,1354,160,1366,170.7C1378.5,181,1391,139,1403,122.7C1415.4,107,1428,117,1434,122.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"
				></path>
      		</svg>
		</div>
	);
}
