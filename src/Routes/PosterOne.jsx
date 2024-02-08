import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Button from "../components/NavBar/Button.jsx";
import Footer from "../components/NavBar/Footer.jsx";

function PosterOne() {
	return (
		<div>
			<NavBar />
			<h2>Poster One</h2>
			<Button />
			<Button />
			<Footer />
		</div>
	);
}

export default PosterOne;
