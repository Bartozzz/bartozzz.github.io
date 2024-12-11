import * as css from "./index.module.scss";

import { Link, GatsbyLinkProps } from "gatsby";

// https://github.com/gatsbyjs/gatsby/issues/16682
export function Keyword<TState>({
  children,
  ...props
}: Omit<GatsbyLinkProps<TState>, "ref">) {
  return (
    <Link<TState>
      className={css.keyword}
      activeClassName={css.keyword__active}
      title={`Topic: ${children}`}
      {...props}
    >
      {children}
    </Link>
  );
}
