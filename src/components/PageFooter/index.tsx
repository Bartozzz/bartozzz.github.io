import * as css from "./index.module.scss";

import { useStaticQuery, graphql, Link } from "gatsby";

import DribbbleIcon from "../../assets/icons/dribbble.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import YouTubeIcon from "../../assets/icons/youtube.svg";

export function socialKeyToIcon(key: string) {
  switch (key) {
    case "GitHub":
      return <GitHubIcon className={`${css.footer__itemIcon}`} />;
    case "Dribbble":
      return <DribbbleIcon className={`${css.footer__itemIcon}`} />;
    case "LinkedIn":
      return <LinkedInIcon className={`${css.footer__itemIcon} `} />;
    case "YouTube":
      return (
        <YouTubeIcon
          className={`${css.footer__itemIcon} ${css.footer__itemIconYoutube}`}
        />
      );
    default:
      return null;
  }
}

interface FooterDataQuery {
  site: {
    siteMetadata: {
      siteRepo: string;
      contact: string;
      social: {
        GitHub: string;
        LinkedIn: string;
        YouTube: string;
      };
    };
  };
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
              LinkedIn
              YouTube
            }
          }
        }
      }
    `
  );

  return (
    <footer
      className={css.footer}
      itemType="http://schema.org/WPFooter"
      itemScope
    >
      <nav itemType="http://schema.org/ContactPoint" itemScope>
        <ul className={`${css.footer__menu} list`}>
          {Object.entries(site.siteMetadata.social).map(([name, link]) => (
            <li key={name} className={css.footer__item}>
              <a
                target="_blank"
                itemProp="url"
                rel="noopener noreferrer"
                href={link}
              >
                {socialKeyToIcon(name)}
                <span className={css.footer__itemText}>{name}</span>
              </a>
            </li>
          ))}

          <li className={`${css.footer__item} ${css.footer__itemRight}`}>
            <Link to="/rss.xml">RSS</Link>
          </li>

          <li className={`${css.footer__item} ${css.footer__itemRight}`}>
            <a
              target="_blank"
              itemProp="email"
              rel="author noopener noreferrer"
              href={`mailto:${site.siteMetadata.contact}`}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>

      <p className={css.footer__source} itemProp="description">
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
