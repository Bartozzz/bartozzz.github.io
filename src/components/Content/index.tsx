import * as css from "./index.module.scss";

import * as React from "react";

export function Content({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLElement>>) {
  return (
    <main
      {...props}
      id="content"
      className={css.content}
      itemProp="mainContentOfPage"
    >
      {children}
    </main>
  );
}
