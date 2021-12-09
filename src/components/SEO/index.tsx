import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  title?: string;
  description?: string;
  lang?: string;
  meta?: Record<string, string>[];
}

export function SEO({
  title,
  description = "",
  lang = "en",
  meta = [],
}: Props) {
  const [theme] = useTheme();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      title={metaTitle}
      titleTemplate={title ? `%s • ${site.siteMetadata.title}` : null}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "theme-color",
          content: theme === "light" ? "#f7f7f7" : "#121212",
        },
      ].concat(meta as any)}
    />
  );
}
