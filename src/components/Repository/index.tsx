import "./index.scss";

import React from "react";
import { Keyword } from "../Keyword";

interface Props {
  as?: string | React.ComponentType<unknown>;
  link: string;
  name: string;
  description: string;
  keywords: string[];
}

export function Repository({
  link,
  name,
  description,
  keywords,
  as = "article",
}: Props) {
  const Wrapper = (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  ) => React.createElement(as, props);

  return (
    <Wrapper
      data-repo-name={name}
      itemType="http://schema.org/SoftwareSourceCode"
      itemScope
    >
      <link itemProp="codeRepository" href={link} />
      <link itemProp="downloadUrl" href={`${link}/releases`} />

      <a
        className="repository__link"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        aria-label={description}
      >
        <h4 className="repository__name" itemProp="name">
          {name}
        </h4>

        <p className="repository__description" itemProp="about">
          {description}
        </p>

        <ul className="repository__meta" aria-hidden="true">
          <li data-repo-stars></li>
          <li data-repo-forks></li>
        </ul>

        <aside itemProp="keywords">
          {keywords.map((keyword) => (
            <Keyword key={keyword}>{keyword}</Keyword>
          ))}
        </aside>
      </a>
    </Wrapper>
  );
}
