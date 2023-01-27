import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Navigation from "./components/Navigation";

const App = () => {
	useEffect(() => {
		document.title = "Peta Sebaran Bantarjati";
	}, []);

	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
