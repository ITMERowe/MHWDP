import React, { useState } from "react";
import './CardWeapon.css'

export default function CardProfile(props) {
    return (
        <div className="Card-weapon">
            <div className="lower-container-weapon">
                <h1> { props.name } </h1>
                <h2> { props.type } </h2>
                <h3> Rarity: { props.rarity } </h3>
                <h3> { props.damageType } </h3>
                <p id="about"> { props.about } </p>
                
            </div>
        </div>
    );
  }