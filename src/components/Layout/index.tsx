import React from "react";
import { PageHeader } from "../PageHeader";
import { PageFooter } from "../PageFooter";

export function Layout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <>
      <a href="#content">Skip to main content</a>

      <PageHeader />

      <main id="content" itemProp="mainContentOfPage">
        {children}
      </main>

      <PageFooter />
    </>
  );
}
