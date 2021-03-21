import "./index.scss";

import React from "react";
import { Link } from "gatsby";

export function PostExcerpt({ link, title, date, content }) {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="post-excerpt__wrapper"
    >
      <header>
        <time
          className="post-excerpt__date"
          dateTime={date}
          itemProp="datePublished"
        >
          {date}
        </time>

        <h2 className="post-excerpt__title">
          <Link to={link} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
      </header>

      <p
        dangerouslySetInnerHTML={{ __html: content }}
        itemProp="description"
        className="post-excerpt__content"
      />
    </article>
  );
}
