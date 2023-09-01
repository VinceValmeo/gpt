import React from "react";
import "./feature.css";

function Feature(props) {
  return (
    <div className="feature_contrainer">
      <h2 className="gradient__text gradient__bar">___</h2>
      <h1 className="title">{props.title}</h1>
      <p className="text">{props.text}</p>
    </div>
  );
}

export default Feature;
