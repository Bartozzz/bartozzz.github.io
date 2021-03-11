import React from "react";
import { Link } from "gatsby";

export function PageHeader() {
  return (
    <nav
      className="header"
      itemType="http://schema.org/SiteNavigationElement"
      itemScope
    >
      <ul className="header-content">
        <li className="header-item">
          <Link to="/" rel="index" title="Go to main page">
            Łanek
          </Link>
        </li>
        <li className="header-item">
          <Link className="" to="/posts/">
            Devblog
          </Link>
        </li>
        <li className="header-item">
          <a
            target="_blank"
            rel="author noopener noreferrer"
            href="https://drive.google.com/file/d/1Zh3NaFogEkufa25H7qxqj0QdqHPzyfZX/view"
            title="Get my résumé from Google Drive"
          >
            Résumé
          </a>
        </li>
      </ul>
    </nav>
  );
}
