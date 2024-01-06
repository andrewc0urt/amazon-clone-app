import "./App.css";
import Header from "./Header";
import Home from "./Home";
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
				<Routes>
					{/* Route for Checkout Page */}
					<Route
						path="/checkout"
						element={
							//Wrap the multiple elements in a fragment tag
							<>
								<Header /> <h1>This is the checkout page!</h1>
							</>
						}
					></Route>

					{/* Default Route to Homepage */}
					<Route
						path="/"
						element={
							<>
								<Header /> <Home />
							</>
						}
					></Route>

					{/* Wildcard route for handling invalid routes or 404 errors */}
					<Route path="*" element={<Navigate to="/" />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
