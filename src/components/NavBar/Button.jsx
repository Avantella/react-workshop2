import React from "react";
import './Button.css'

function Button() {    

// CSS til button-elementet: 
    const buttonStyle = {
        backgroundColor: "red",
        color: "black",
        border: "5px solid black", 
        fontSize: "20px",
        marginTop: "15px",
    }; 


// html til button, henter styling fra css over
    return (
        <div>
            <button style={buttonStyle}>Click Me</button>
        </div>
    ); 
}

export default Button; 