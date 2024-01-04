import "./App.css";
import Header from "./Header";

function App() {
	return (
		// BEM (naming convention - Block, Element, Modifier)
		// renamed "App" to "app"
		<div className="app">
			{/* Import Header.js into the App */}
			<Header />
			{/* Home */}
		</div>
	);
}

export default App;
