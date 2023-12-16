import * as css from "./index.module.scss";

import * as React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import { PostAuthors } from "./PostAuthors";
import { PostKeywords } from "./PostKeywords";
import { PostTimeToRead } from "./PostTimeToRead";

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
  wordCount: number;
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
  wordCount,
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
      <meta itemProp="wordCount" content={`${wordCount}`} />

      <header>
        <p className={css.postExcerpt__info}>
          <PostAuthors data={authors} className="visually-hidden" />

          <time dateTime={datePublishedMeta} itemProp="datePublished">
            {datePublished}
          </time>

          <span aria-hidden>{" • "}</span>
          <PostTimeToRead value={timeToRead} />

          <span aria-hidden>{" • "}</span>
          <PostKeywords data={keywords} className={css.postExcerpt__keyword} />
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
