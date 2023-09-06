import React from "react";
import "./article.css";

function Article(props) {
  return (
    <div className="article__container">
      <div className="article__card">
        <img src={props.image} className="article__img__header" />
        <div className="article__card__text">
          <p className="article__card__date">{props.date}</p>
          <h3 className="article__card__headline">{props.headline}</h3>
          <p className="article__card__footer">Read Full Article</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
