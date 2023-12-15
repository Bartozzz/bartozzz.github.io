import { HeadProps, PageProps, graphql } from "gatsby";

import { Content } from "../components/Content";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

interface DataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

export default function NotFoundPage({}: PageProps<DataType>) {
  return (
    <Layout>
      <Content>
        <h1
          style={{
            fontFamily: "var(--fn-mono)",
            fontSize: "var(--fs-xl)",
            lineHeight: "var(--lh-xl)",
            color: "var(--text-primary)",
            margin: "var(--cs-xl) 0",
          }}
        >
          404: Not Found
        </h1>
        <p
          style={{
            fontSize: "var(--fs-md)",
            lineHeight: "var(--lh-md)",
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          You just hit a page that does not exist…
        </p>
      </Content>
    </Layout>
  );
}

export function Head({ data, location }: HeadProps<DataType>) {
  const siteUrl = data.site.siteMetadata.siteUrl;
  const slug = location.pathname;

  return (
    <SEO
      url={`${siteUrl}${slug}`}
      title="404: Not Found"
      description="Page not found"
    />
  );
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
