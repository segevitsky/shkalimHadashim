import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase";

export const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	//Firebase auth function
	function signup(email, pass) {
		return auth.createUserWithEmailAndPassword(email, pass);
	}

	function login(email, pass) {
		return auth.signInWithEmailAndPassword(email, pass);
	}

	function logout() {
		return auth.signOut();
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setLoading(false);
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	const values = {
		currentUser,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={values}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
