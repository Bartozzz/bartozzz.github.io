import { useStaticQuery, graphql } from "gatsby";

interface Props {
  url?: string;
  image?: string;
  title?: string;
  description?: string;
}

export function SEO({
  url,
  image,
  title,
  description,
  children,
}: React.PropsWithChildren<Props>) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const metaUrl = url || site.siteMetadata.siteUrl;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || `${site.siteMetadata.siteUrl}/thumbnail.png`;
  const metaTitle = title
    ? `${title} • ${site.siteMetadata.title}`
    : `${site.siteMetadata.title}`;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@blaniewski" />
      <meta name="og:url" content={metaUrl} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImage} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />

      {children}
    </>
  );
}
