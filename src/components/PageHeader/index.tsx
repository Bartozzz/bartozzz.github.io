import "./index.scss";

import React from "react";
import { Link } from "gatsby";
import { Toggle } from "../Toggle";

declare global {
  type Theme = "dark" | "light";

  interface Window {
    __theme: Theme;
    __setPreferredTheme: (theme: Theme) => void;
    __onThemeChange: () => void;
  }
}

export function PageHeader() {
  const [theme, setTheme] = React.useState(window.__theme);

  const handleThemeChange = React.useCallback((event) => {
    window.__setPreferredTheme(event.target.checked ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    <nav
      className="header"
      itemType="http://schema.org/SiteNavigationElement"
      itemScope
    >
      <ul className="header__content">
        <li className="header__item header__item--logo">
          <Link to="/" rel="index" title="Go to main page">
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

        <li className="header__item">
          <Toggle
            aria-label="Toggle theme"
            defaultChecked={theme === "dark"}
            onChange={handleThemeChange}
            icons={false}
          />
        </li>
      </ul>
    </nav>
  );
}
