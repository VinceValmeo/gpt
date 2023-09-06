import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets/blog";

function Blog() {
  return (
    <div className="blog__container">
      <h1 className="blog__container__header gradient__text">
        A lot is happening,
        <br />
        We are blogging about it.
      </h1>

      <div className="article__container">
        <div className="article__container-groupA">
          <Article
            image={blog01}
            date="Sep 26, 2021"
            headline="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="article__container-groupB">
          <Article
            image={blog02}
            date="Sep 26, 2021"
            headline="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog03}
            date="Sep 26, 2021"
            headline="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog04}
            date="Sep 26, 2021"
            headline="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog05}
            date="Sep 26, 2021"
            headline="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
