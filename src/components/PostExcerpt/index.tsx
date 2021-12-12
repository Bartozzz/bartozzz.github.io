import * as css from "./index.module.scss";

import { Link } from "gatsby";

interface Props {
  link: string;
  title: string;
  date: string;
  content: string;
  authors?: string[];
}

export function PostExcerpt({ link, title, date, authors, content }: Props) {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className={css.postExcerpt__wrapper}
    >
      <header>
        <time
          className={css.postExcerpt__date}
          dateTime={date}
          itemProp="datePublished"
        >
          {date}
        </time>

        <h2 className={css.postExcerpt__title}>
          <Link to={link} itemProp="url">
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
