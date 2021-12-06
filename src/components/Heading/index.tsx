import "./index.scss";

import * as React from "react";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Heading({
  children,
  ...props
}: React.PropsWithChildren<HeaderProps>) {
  return (
    <header className="heading__wrapper" {...props}>
      {children}
    </header>
  );
}

Heading.H1 = function H1({
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <h1 className="heading__text heading__text--h1" {...props}>
      {children}
    </h1>
  );
};

Heading.H2 = function H2({
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <h2 className="heading__text heading__text--h2" {...props}>
      {children}
    </h2>
  );
};

Heading.H3 = function H3({
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <h3 className="heading__text heading__text--h3" {...props}>
      {children}
    </h3>
  );
};

Heading.H4 = function H4({
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <h4 className="heading__text heading__text--h4" {...props}>
      {children}
    </h4>
  );
};

Heading.H5 = function H5({
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <h5 className="heading__text heading__text--h5" {...props}>
      {children}
    </h5>
  );
};

Heading.H6 = function H6({
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <h6 className="heading__text heading__text--h6" {...props}>
      {children}
    </h6>
  );
};
