import * as css from "./index.module.scss";

import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import { mapKeywordToSlug } from "../../../gatsby/helpers/mapKeywordToSlug.mjs";
import { mapSlugToImageName } from "../../../gatsby/helpers/mapSlugToImageName.mjs";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  link: string;
  title: string;
  datePublished: string;
  datePublishedMeta: string;
  dateModifiedMeta: string;
  content: string;
  keywords: string[];
  language: string;
  timeToRead: number;
  authors?: string[];
}

interface SiteQuery {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

export function PostExcerpt({
  as = "h2",
  link,
  title,
  datePublished,
  datePublishedMeta,
  dateModifiedMeta,
  authors,
  content,
  language,
  keywords,
  timeToRead,
}: Props) {
  const data = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const siteUrl = data.site.siteMetadata.siteUrl;
  const thumbnailUrl = `${siteUrl}/thumbnails/${mapSlugToImageName(link)}.png`;

  const HeadingWrapper = (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
  ) => React.createElement(as, props);

  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className={css.postExcerpt__wrapper}
      lang={language}
    >
      <meta itemProp="image" content={thumbnailUrl} />
      <meta itemProp="dateModified" content={dateModifiedMeta} />
      {authors.map((author) => (
        <meta key={author} itemProp="author" content={author} />
      ))}

      <header>
        <p className={css.postExcerpt__info}>
          <time dateTime={datePublishedMeta} itemProp="datePublished">
            {datePublished}
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
                    to={`/posts/${mapKeywordToSlug(keyword)}/`}
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

        <HeadingWrapper className={css.postExcerpt__title}>
          <Link to={link} itemProp="url" rel="bookmark">
            <span itemProp="headline">{title}</span>
          </Link>
        </HeadingWrapper>
      </header>

      <p
        dangerouslySetInnerHTML={{ __html: content }}
        itemProp="description"
        className={css.postExcerpt__content}
      />
    </article>
  );
}
