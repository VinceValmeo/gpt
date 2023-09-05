import React from "react";
import possibility from "../../assets/possibility.png";
import "./possibility.css";

function Possibility() {
  return (
    <div className="possibility__container">
      <div className="possibility__image">
        <img src={possibility} alt="possibilities" />
      </div>
      <div className="possiblity__maintext">
        <h1 className="possibility__header gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility__maintext">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
          <p className="gradient__text early__access">
            Request Early Access to Get Started
          </p>
        </p>
      </div>
    </div>
  );
}

export default Possibility;
