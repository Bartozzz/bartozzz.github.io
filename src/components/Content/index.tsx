import "./index.scss";

import React from "react";

export function Content({ children }: React.PropsWithChildren<unknown>) {
  return (
    <main id="content" className="content" itemProp="mainContentOfPage">
      {children}
    </main>
  );
}
