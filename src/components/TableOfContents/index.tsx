import * as css from "./index.module.scss";

import * as React from "react";

import { Link } from "gatsby";

import { TableOfContents as TTableOfContents } from "../../../gatsby/types/queries";

interface Props {
  data: TTableOfContents;
}

export function TableOfContents({ data }: Props) {
  const [activeHeadingId, setActiveHeadingId] = React.useState();

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveHeadingId(entry.target.id);
  //         }
  //       });
  //     },
  //     { rootMargin: `0% 0% -80% 0%` }
  //   );
  //
  //   headingsIds.forEach((id) => {
  //     const element = document.getElementById(id);
  //
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   });
  //
  //   return () => {
  //     headingsIds.forEach((id) => {
  //       const element = document.getElementById(id);
  //
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     });
  //   };
  // }, [headingsIds]);

  return (
    <nav aria-label="On this page" className={css.toc}>
      <p className={css.toc__title}>Contents</p>
      <TableOfContentsList tree={data} activeSlug={activeHeadingId} />
    </nav>
  );
}

export function TableOfContentsList({
  tree,
  activeSlug,
}: {
  tree: TTableOfContents;
  activeSlug: string;
}) {
  return (
    <ol className={css.toc__list}>
      {tree.items.map((heading) => (
        <li key={heading.url}>
          <Link
            to={heading.url}
            title={heading.title}
            className={`${css.toc__link} ${
              activeSlug === heading.url ? css.toc__linkActive : ""
            }`}
          >
            <span className={css.toc__ellipsis}>{heading.title}</span>
          </Link>

          {heading.items?.length > 0 && (
            <TableOfContentsList tree={heading} activeSlug={activeSlug} />
          )}
        </li>
      ))}
    </ol>
  );
}
