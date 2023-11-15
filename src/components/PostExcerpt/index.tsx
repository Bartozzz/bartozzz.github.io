import * as css from "./index.module.scss";

import React from "react";

import { Link } from "gatsby";

import { mapKeywordToSlug } from "../../../gatsby/helpers/mapKeywordToSlug.mjs";

interface Props {
  link: string;
  title: string;
  date: string;
  content: string;
  keywords: string[];
  language: string;
  timeToRead: number;
  authors?: string[];
}

export function PostExcerpt({
  link,
  title,
  date,
  authors,
  content,
  language,
  keywords,
  timeToRead,
}: Props) {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className={css.postExcerpt__wrapper}
      lang={language}
    >
      <header>
        <p className={css.postExcerpt__info}>
          <time dateTime={date} itemProp="datePublished">
            {date}
          </time>

          {timeToRead ? (
            <>
              <span aria-hidden>{" • "}</span>
              <span itemProp="timeRequired">{Math.ceil(timeToRead)} min</span>
              {" read "}
            </>
          ) : null}

          {keywords?.length > 0 ? (
            <>
              <span aria-hidden>{" • "}</span>
              {keywords.map((keyword, index) => (
                <React.Fragment key={keyword}>
                  <Link
                    to={`/posts/${mapKeywordToSlug(keyword)}`}
                    title={`Category: ${keyword}`}
                    className={css.postExcerpt__keyword}
                  >
                    {keyword}
                  </Link>
                  {index !== keywords.length - 1 ? ", " : null}
                </React.Fragment>
              ))}
            </>
          ) : null}
        </p>

        <h2 className={css.postExcerpt__title}>
          <Link to={link} itemProp="url" rel="bookmark">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>

        {authors?.length ? (
          <ul className="visually-hidden">
            {authors.map((author) => (
              <li key={author}>
                <p itemProp="author">{author}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <p
        dangerouslySetInnerHTML={{ __html: content }}
        itemProp="description"
        className={css.postExcerpt__content}
      />
    </article>
  );
}
