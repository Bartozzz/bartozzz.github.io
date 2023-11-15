import { useStaticQuery, graphql } from "gatsby";

import { useTheme } from "../../hooks/useTheme";

interface Props {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: Props) {
  const [theme] = useTheme();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title
    ? `${title} • ${site.siteMetadata.title}`
    : `${site.siteMetadata.title}`;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {theme !== null ? (
        <meta
          name="theme-color"
          content={theme === "light" ? "#ffffff" : "#121212"}
        />
      ) : null}
    </>
  );
}
