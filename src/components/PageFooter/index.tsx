import "./index.css";

import React from "react";

export function PageFooter() {
  return (
    <footer className="footer" itemType="http://schema.org/WPFooter" itemScope>
      <nav typeof="http://schema.org/ContactPoint" itemScope>
        <ul className="footer__menu">
          <li className="footer__item">
            <a
              target="_blank"
              itemProp="url"
              rel="noopener noreferrer"
              href="https://github.com/Bartozzz"
            >
              GitHub
            </a>
          </li>

          <li className="footer__item">
            <a
              target="_blank"
              itemProp="url"
              rel="noopener noreferrer"
              href="https://dribbble.com/bartozzz"
            >
              Dribbble
            </a>
          </li>

          <li className="footer__item">
            <a
              target="_blank"
              itemProp="url"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/bartozzz/"
            >
              LinkedIn
            </a>
          </li>

          <li className="footer__item">
            <a
              target="_blank"
              itemProp="url"
              rel="noopener noreferrer"
              href="https://youtube.com/channel/UCIC1vaSJwSJ2sqKWC3wTTmQ"
            >
              YouTube
            </a>
          </li>

          <li className="footer__item footer__item--contact">
            <a
              target="_blank"
              itemProp="email"
              rel="noopener noreferrer"
              href="/cdn-cgi/l/email-protection#3b595a494f5448417b575a55525e4c48505215565e"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>

      <p className="footer__source" itemProp="description">
        Hand-coded using Gatsby, TypeScript and more.
        <a
          target="_blank"
          itemProp="url"
          rel="noopener noreferrer"
          href="https://github.com/Bartozzz/bartozzz.github.io"
        >
          See the source.
        </a>
      </p>
    </footer>
  );
}
