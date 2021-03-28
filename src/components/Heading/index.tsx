import "./index.scss";

import React from "react";

export function Heading({ children }: React.PropsWithChildren<unknown>) {
  return <header className="heading__wrapper">{children}</header>;
}

Heading.H1 = function H1({ children }: React.PropsWithChildren<unknown>) {
  return <h1 className="heading__text heading__text--h1">{children}</h1>;
};

Heading.H2 = function H2({ children }: React.PropsWithChildren<unknown>) {
  return <h2 className="heading__text heading__text--h2">{children}</h2>;
};

Heading.H3 = function H3({ children }: React.PropsWithChildren<unknown>) {
  return <h3 className="heading__text heading__text--h3">{children}</h3>;
};

Heading.H4 = function H4({ children }: React.PropsWithChildren<unknown>) {
  return <h4 className="heading__text heading__text--h4">{children}</h4>;
};

Heading.H5 = function H5({ children }: React.PropsWithChildren<unknown>) {
  return <h5 className="heading__text heading__text--h5">{children}</h5>;
};

Heading.H6 = function H6({ children }: React.PropsWithChildren<unknown>) {
  return <h6 className="heading__text heading__text--h6">{children}</h6>;
};
