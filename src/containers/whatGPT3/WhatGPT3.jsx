import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

function WhatGPT3() {
  return (
    <div className="wgpt__container">
      <div className="gpt3__whatgpt3">
        <Feature
          title="What is GPT-3?"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />

        <div className="wgpt__explore">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination{" "}
          </h1>
          <p className="gradient__text">Explore The Library</p>
        </div>
        <div className="feature-container">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatGPT3;
