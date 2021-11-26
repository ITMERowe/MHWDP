import React, { useState } from "react";
import './CardAS.css'

export default function CardProfile(props) {
    return (
        <div className="Card">
            <div className="lower-container">
                <h1> { props.name } </h1>
                <h2> Rank: { props.rank } </h2>
                <p id="about"> { props.about } </p>
                
            </div>
        </div>
    );
  }