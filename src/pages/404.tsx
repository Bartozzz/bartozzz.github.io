import { Content } from "../components/Content";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not Found" />

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
