import * as css from "./index.module.scss";

import React from "react";
import { Link } from "gatsby";
import { Toggle } from "../Toggle";
import { useTheme } from "../../hooks/useTheme";

export function PageHeader() {
  const [theme, setTheme] = useTheme();

  const handleThemeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTheme(event.target.checked ? "dark" : "light");
    },
    [setTheme]
  );

  return (
    <nav
      className={css.header}
      itemType="http://schema.org/SiteNavigationElement"
      itemScope
    >
      <ul className={css.header__content}>
        <li className={`${css.header__item} ${css.header__itemLogo}`}>
          <Link to="/" title="Go to main page">
            Bart
          </Link>
        </li>

        <li className={css.header__item}>
          <Link to="/posts/">Devblog</Link>
        </li>

        <li className={css.header__item}>
          <a
            target="_blank"
            rel="author noopener noreferrer"
            href="https://drive.google.com/file/d/1Zh3NaFogEkufa25H7qxqj0QdqHPzyfZX/view"
            title="Get my résumé from Google Drive"
          >
            Résumé
          </a>
        </li>

        {theme !== null ? (
          <li className={css.header__item}>
            <Toggle
              aria-label="Toggle theme"
              checked={theme === "dark"}
              onChange={handleThemeChange}
              icons={false}
            />
          </li>
        ) : (
          <li className={css.header__item}>
            <div className={css.header__itemTogglePlaceholder} />
          </li>
        )}
      </ul>
    </nav>
  );
}
