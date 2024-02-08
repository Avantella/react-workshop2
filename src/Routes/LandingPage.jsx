// LandingPage.jsx

import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Button from "../components/NavBar/Button.jsx";
import Footer from "../components/NavBar/Footer.jsx";


function LandingPage() {
	return (
		<>
			<NavBar />
			<h1>Welcome to the Landing Page!</h1>
			<Button />
			<Footer /> 
		</>
	);
}

export default LandingPage;
