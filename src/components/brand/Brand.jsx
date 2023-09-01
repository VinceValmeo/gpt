import React from "react";
import "./brand.css";
import { Google, Slack, Atlassian, Dropbox, Shopify } from "./imports";
function Brand() {
  return (
    <div className="brand__container">
      <div className="brand-image">
        <img className="brand-icon" src={Google} alt="google" />
        <img className="brand-icon" src={Slack} alt="slack" />
        <img className="brand-icon" src={Atlassian} alt="atlassian" />
        <img className="brand-icon" src={Dropbox} alt="dropbox" />
        <img className="brand-icon" src={Shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
