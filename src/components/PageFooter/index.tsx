import "./index.css";

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface Query {
  site: {
    siteMetadata: {
      siteRepo: string;
      contact: string;
      social: {
        GitHub: string;
        Dribbble: string;
        LinkedIn: string;
        YouTube: string;
      };
    };
  };
}

export function PageFooter() {
  const { site } = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            siteRepo
            contact
            social {
              GitHub
              Dribbble
              LinkedIn
              YouTube
            }
          }
        }
      }
    `
  );

  return (
    <footer className="footer" itemType="http://schema.org/WPFooter" itemScope>
      <nav typeof="http://schema.org/ContactPoint" itemScope>
        <ul className="footer__menu">
          {Object.entries(site.siteMetadata.social).map(([name, link]) => (
            <li key={name} className="footer__item">
              <a
                target="_blank"
                itemProp="url"
                rel="noopener noreferrer"
                href={link}
              >
                {name}
              </a>
            </li>
          ))}

          <li className="footer__item footer__item--contact">
            <a
              target="_blank"
              itemProp="email"
              rel="noopener noreferrer"
              href={`mailto:${site.siteMetadata.contact}`}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>

      <p className="footer__source" itemProp="description">
        Hand-coded using Gatsby, TypeScript and more.{" "}
        <a
          target="_blank"
          itemProp="url"
          rel="noopener noreferrer"
          href={site.siteMetadata.siteRepo}
        >
          See the source.
        </a>
      </p>
    </footer>
  );
}
