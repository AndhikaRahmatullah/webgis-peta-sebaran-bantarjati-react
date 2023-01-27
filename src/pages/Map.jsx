import { useEffect } from "react";
import { motion } from "framer-motion";

const Map = () => {
	useEffect(() => {
		document.title = "Peta | Peta Sebaran Bantarjati";
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 500 }}>
			<div className="">
				<iframe
					src="https://webgisdika.000webhostapp.com/"
					className="h-screen w-screen overflow-x-hidden overflow-y-hidden"
				/>
			</div>
		</motion.div>
	);
};

export default Map;
