import * as css from "./index.module.scss";

import * as React from "react";

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
    >,
  ) => React.createElement(as, props);

  return (
    <Wrapper
      data-repo-name={name}
      itemType="http://schema.org/SoftwareSourceCode"
      itemScope
    >
      <link itemProp="codeRepository" href={link} />

      <a
        className={css.repository__link}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <h4 className={css.repository__name} itemProp="name">
          {name}
        </h4>

        <p className={css.repository__description} itemProp="about">
          {description}
        </p>

        <aside itemProp="keywords">
          {keywords.map((keyword) => (
            <strong className={css.repository__tag} key={keyword}>
              {keyword}
            </strong>
          ))}
        </aside>
      </a>
    </Wrapper>
  );
}
