import React from "react";
import "./cta.css";

function CTA() {
  return (
    <div className="CTA__container">
      <div className="CTA__parent">
        <div className="CTA__text">
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="CTA__attention">
          <h1>Register today & start exploring the endless possiblities.</h1>
          <button type="button" className="button__start">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
