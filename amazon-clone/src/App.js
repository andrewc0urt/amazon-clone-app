import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

function App() {
	return (
		<Router>
			{/* BEM (naming convention - Block, Element, Modifier) renamed "App" to"app" */}
			<div className="app">
				<Header />
				<Routes>
					{/* Route for Checkout Page */}
					<Route path="/checkout" element={<Checkout />}></Route>

					{/* Default Route to Homepage */}
					<Route path="/" element={<Home />}></Route>

					{/* Wildcard route for handling invalid routes or 404 errors */}
					<Route path="*" element={<Navigate to="/" />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
