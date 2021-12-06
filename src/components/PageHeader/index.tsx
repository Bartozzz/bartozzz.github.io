import "./index.scss";

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
      className="header"
      itemType="http://schema.org/SiteNavigationElement"
      itemScope
    >
      <ul className="header__content">
        <li className="header__item header__item--logo">
          <Link to="/" title="Go to main page">
            Łanek
          </Link>
        </li>

        <li className="header__item">
          <Link className="" to="/posts/">
            Devblog
          </Link>
        </li>

        <li className="header__item">
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
          <li className="header__item">
            <Toggle
              aria-label="Toggle theme"
              checked={theme === "dark"}
              onChange={handleThemeChange}
              icons={false}
            />
          </li>
        ) : (
          <li className="header__item">
            <div className="header__item--toggle-placeholder" />
          </li>
        )}
      </ul>
    </nav>
  );
}
