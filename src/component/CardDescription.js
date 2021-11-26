import React, { useState } from "react";
import './CardMonster.css'

export default function CardMonster(props) {
    return (
        <div className="Card-monster">
            <div className="lower-container-monster">
                <h1> { props.name } </h1>
                <h4> { props.type } </h4>
                <h2> { props.species } </h2>
                <h6> { props.descriptions } </h6>
                <p id="about"> { props.about } </p>
            </div>
        </div>
    );
  }