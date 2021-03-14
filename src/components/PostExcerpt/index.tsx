import "./index.css";

import React from "react";
import { Link } from "gatsby";

export function PostExcerpt({ link, title, date, content }) {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <header>
        <h2>
          <Link to={link} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          itemProp="description"
        />

        <Link to={link}>Read more.</Link>
      </section>
    </article>
  );
}
