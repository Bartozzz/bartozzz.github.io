import "./index.scss";
import { FooterDataQuery } from "../../../graphql-types";

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import DribbbleIcon from "../../assets/icons/dribbble.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import YouTubeIcon from "../../assets/icons/youtube.svg";
import MailIcon from "../../assets/icons/mail.svg";

export function socialKeyToIcon(key: string) {
  switch (key) {
    case "GitHub":
      return (
        <GitHubIcon className="footer__item-icon footer__item-icon--github" />
      );
    case "Dribbble":
      return (
        <DribbbleIcon className="footer__item-icon footer__item-icon--dribbble" />
      );
    case "LinkedIn":
      return (
        <LinkedInIcon className="footer__item-icon footer__item-icon--linkedin" />
      );
    case "YouTube":
      return (
        <YouTubeIcon className="footer__item-icon footer__item-icon--youtube" />
      );
    default:
      return null;
  }
}

export function PageFooter() {
  const { site } = useStaticQuery<FooterDataQuery>(
    graphql`
      query FooterData {
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
                {socialKeyToIcon(name)}
                <span className="footer__item-text">{name}</span>
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
              <MailIcon className="footer__contact-icon" />
              <span className="footer__contact-text">Get in touch</span>
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
