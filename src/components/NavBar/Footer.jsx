import React from "react";

function Footer() {

const footerStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "15px",
    display: "flex", 
    marginTop: "600px",
    justifyContent: "space-evenly"
}

const gitButton = {
    backgroundColor: "grey",
    color: "white",
}
    return ( 
    <> 
        <footer style={footerStyle}>
            <p> &copy;Made by Grete</p>
            <button style={gitButton}>
                <a href="https://github.com/Avantella">My Github Account</a>
            </button>
        </footer>
    </>
    );
}

export default Footer;