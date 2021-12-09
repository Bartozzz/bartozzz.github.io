import * as css from "./index.module.scss";

import * as React from "react";

export function Content({ children }: React.PropsWithChildren<unknown>) {
  return (
    <main id="content" className={css.content} itemProp="mainContentOfPage">
      {children}
    </main>
  );
}
