import * as css from "./index.module.scss";

import * as React from "react";

interface Props {
  as?: string | React.ComponentType<unknown>;
  link: string;
  name: string;
  icon: string;
  color: string;
  textColor: string;
  description: string;
}

export function GameCard({
  link,
  name,
  description,
  icon,
  color,
  textColor,
  as = "article",
}: Props) {
  const Wrapper = (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
  ) => React.createElement(as, props);

  return (
    <Wrapper className={css.game__wrapper}>
      <a className={css.game__link} href={link} aria-label={description}>
        <figure
          className={css.game__card}
          style={{
            color: textColor,
            backgroundColor: color,
            boxShadow: `
              0 6px 20px -10px ${color},
              0 0px 8px -2px rgba(0, 0, 0, 0.25)
            `,
          }}
        >
          <picture>
            <img
              alt={`Icon image for ${name} game`}
              src={icon}
              width={380}
              height={380}
              loading="lazy"
            />
          </picture>

          <figcaption>
            <h4 className={css.game__name}>{name}</h4>
            <p className={css.game__description}>{description}</p>
          </figcaption>
        </figure>
      </a>
    </Wrapper>
  );
}
