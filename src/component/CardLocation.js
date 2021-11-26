import React, { useState } from "react";
import "./CardLocation.css";

export default function CardProfile(props) {
  return (
      <div className="Card">
          <div className="lower-container">
              <h1> { props.name } </h1>
              <h2> Zones: { props.zoneCount } </h2>
              <p id="about"> { props.about } </p>
          </div>
      </div>
  );
}
