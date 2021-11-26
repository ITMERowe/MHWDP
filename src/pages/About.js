import React, { useState } from "react";
import './Style.css';

export default function About(props) {
    return (
        <div className="Card1">
            <div className="upper-container1">
                <div className="image-container">
                   
                </div>
            </div>
            <div className="lower-container1">
                <h1>Aplikasi dibuat oleh:</h1>
                <h2>Muhammad Hanif Atthariq</h2>
                <h2>21120117140028</h2>
                <p id="about"> { props.about } </p>
            
            </div>
        </div>
    );
  }