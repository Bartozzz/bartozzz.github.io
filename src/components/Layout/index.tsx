import "./index.scss";

import React from "react";
import { PageHeader } from "../PageHeader";
import { PageFooter } from "../PageFooter";

export function Layout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <>
      <a className="content__skip visually-hidden" href="#content">
        Skip to main content
      </a>

      <PageHeader />

      <main id="content" className="content" itemProp="mainContentOfPage">
        {children}
      </main>

      <PageFooter />
    </>
  );
}
