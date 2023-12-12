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
          siteUrl
        }
      }
    }
  `);

  const metaUrl = url || `${site.siteMetadata.siteUrl}/`;
  const metaImage = image || `${site.siteMetadata.siteUrl}/thumbnail.png`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@blaniewski" />
      <meta name="og:url" content={metaUrl} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImage} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />

      {children}
    </>
  );
}
