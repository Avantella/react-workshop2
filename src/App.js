import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Routes/LandingPage.jsx";
import PosterOne from "./Routes/PosterOne.jsx";
import PosterTwo from "./Routes/PosterTwo.jsx";
import PosterThree from "./Routes/PosterThree.jsx";
import NoContent from "./Routes/NoContent.jsx";
import PosterFour from "./Routes/PosterFour.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/PosterOne" element={<PosterOne />} />
				<Route path="/PosterTwo" element={<PosterTwo />} />
				<Route path="/PosterThree" element={<PosterThree />} />
				<Route path="/PosterFour" element={<PosterFour />} />
				<Route path="*" element={<NoContent />} />
			</Routes>
		</Router>
	);
}
export default App;
