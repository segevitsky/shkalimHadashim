import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Categories from "../../Pages/Categories/Categories";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import { AuthProvider } from "../../contexts/AuthContext";
import "./app.css";

const App = () => {
	return (
		<AuthProvider>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<WelcomePage />
				</Route>
				<Route path="/categories">
					<Categories />
				</Route>
				<Route path="/:slug">
					<CategoryPage />
				</Route>
				{/* <ExpenseGraph path="/expense-graph" /> */}
			</Switch>
		</AuthProvider>
	);
};

export default App;
