import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../pages/Map";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";

const Router = () => {
	return (
		<AnimatePresence>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/peta"
					element={<Map />}
				/>
				<Route
					path="/tentang-kami"
					element={<About />}
				/>
			</Routes>
		</AnimatePresence>
	);
};

export default Router;
