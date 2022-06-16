import * as css from "./index.module.scss";

import * as React from "react";

import { Link } from "gatsby";
import GithubSlugger from "github-slugger";

interface Props {
  headings: Heading[];
  maxDepth?: number;
}

interface Heading {
  value: string;
  depth: number;
}

interface HeadingWithSlug extends Heading {
  slug: string;
}

interface HeadingTree extends HeadingWithSlug {
  children: HeadingTree[];
}

/**
 * Input:
 * [
 *    { "depth": 2, "value": "Challenges" },
 *    { "depth": 3, "value": "Porting pixi.js to Expo" },
 *    { "depth": 4, "value": "Issue #1: incompatible with Expo 43 (#221)" },
 *    { "depth": 3, "value": "Game performance" },
 *]
 *
 * Output:
 * [
 *   {
 *     "value": "Challenges",
 *     "children": [
 *       {
 *         "value": "Porting pixi.js to Expo",
 *         "children": [
 *           {
 *             "value": "Issue #1: incompatible with Expo 43 (#221)",
 *             "children": [],
 *           },
 *         ]
 *       },
 *       {
 *         "value": "Game performance",
 *         "children": [],
 *       },
 *     ]
 *   },
 * ]
 */
function transformHeadingsToTree(headings: HeadingWithSlug[]) {
  const tree: HeadingTree[] = [];
  const levels: HeadingTree[][] = [tree];

  headings.forEach((heading) =>
    levels[heading.depth].push({
      ...heading,
      children: (levels[heading.depth + 1] = []),
    })
  );

  return tree;
}

function normalizeHeadings(
  headings: Heading[],
  maxDepth: number
): HeadingWithSlug[] {
  const slugger = new GithubSlugger();

  return headings
    .map((heading) => ({
      slug: slugger.slug(heading.value),
      value: heading.value,
      depth: heading.depth - 2,
    }))
    .filter((heading) => heading.depth < maxDepth);
}

export function TableOfContents({ headings, maxDepth = 2 }: Props) {
  const headingsWithSlug = normalizeHeadings(headings, maxDepth);
  const headingsIds = headingsWithSlug.map((heading) => heading.slug);
  const headingsTree = transformHeadingsToTree(headingsWithSlug);

  const [activeHeadingId, setActiveHeadingId] = React.useState(headingsIds[0]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    headingsIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headingsIds.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headingsIds]);

  return (
    <nav aria-label="On this page" className={css.toc}>
      <p className={css.toc__title}>Contents</p>
      <TableOfContentsList tree={headingsTree} activeSlug={activeHeadingId} />
    </nav>
  );
}

export function TableOfContentsList({
  tree,
  activeSlug,
}: {
  tree: HeadingTree[];
  activeSlug: string;
}) {
  return (
    <ol className={css.toc__list}>
      {tree.map((heading) => (
        <li key={heading.value}>
          <Link
            to={`#${heading.slug}`}
            title={heading.value}
            className={`${css.toc__link} ${
              activeSlug === heading.slug ? css.toc__linkActive : ""
            }`}
          >
            <span className={css.toc__ellipsis}>{heading.value}</span>
          </Link>

          {heading.children.length > 0 && (
            <TableOfContentsList
              tree={heading.children}
              activeSlug={activeSlug}
            />
          )}
        </li>
      ))}
    </ol>
  );
}
