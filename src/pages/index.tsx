import "../styles/pages/index.scss";

import { graphql } from "gatsby";

import { Content } from "../components/Content";
import { GameCard } from "../components/GameCard";
import { Heading } from "../components/Heading";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { PostExcerpt } from "../components/PostExcerpt";
import { Repository } from "../components/Repository";
import { SEO } from "../components/SEO";

interface IndexPageQuery {
  site?: {
    siteMetadata?: {
      title?: string;
    };
  };
  allMdx: {
    nodes: Array<{
      excerpt: string;
      timeToRead?: number;
      fields?: {
        slug?: string;
      };
      frontmatter?: {
        dateCreated?: any;
        dateUpdated?: any;
        datePublished?: any;
        title: string;
        authors?: Array<string>;
        language?: string;
        keywords?: Array<string>;
        description?: string;
      };
    }>;
  };
  allRepositoriesYaml: {
    nodes: Array<{
      id: string;
      name?: string;
      desc?: string;
      path?: string;
      keywords?: Array<string>;
    }>;
  };
  allGamesYaml: {
    nodes: Array<{
      id: string;
      name?: string;
      desc?: string;
      path?: string;
      icon?: string;
      color?: string;
      textColor?: string;
    }>;
  };
}

interface Props {
  data: IndexPageQuery;
}

export default function IndexPage({ data }: Props) {
  const posts = data.allMdx.nodes;
  const games = data.allGamesYaml.nodes;
  const repositories = data.allRepositoriesYaml.nodes;

  return (
    <Layout>
      <Hero />

      <Content>
        <article>
          <Heading>
            <Heading.H2>Open-source projects</Heading.H2>
            <Heading.H3>
              Community is essential to me. I want to become the kind of
              developer that I would want to work with. That is why I share my
              knowledge, code, and time with others.
            </Heading.H3>
          </Heading>

          <ol className="repositories list">
            {repositories.map((repository) => (
              <Repository
                as="li"
                key={repository.id}
                link={repository.path}
                name={repository.name}
                description={repository.desc}
                keywords={repository.keywords}
              />
            ))}
          </ol>
        </article>
      </Content>

      <article>
        <Heading>
          <Heading.H2>Hand-crafted games</Heading.H2>
          <Heading.H3>
            I create mobile games from scratch! I learn most by experimenting
            and game development makes me experiment a lot!
          </Heading.H3>
        </Heading>

        <ol className="games list">
          {games.map((repository) => (
            <GameCard
              as="li"
              key={repository.id}
              link={repository.path}
              name={repository.name}
              icon={repository.icon}
              color={repository.color}
              textColor={repository.textColor}
              description={repository.desc}
            />
          ))}
        </ol>
      </article>

      <Content>
        <article>
          <Heading>
            <Heading.H2>Newest articles</Heading.H2>
            <Heading.H3>
              I write articles about web development, mostly React, Vue, best
              practices, accessibility and JS related stuff.
            </Heading.H3>
          </Heading>

          <ol className="list">
            {posts.map((post) => (
              <li key={post.fields.slug}>
                <PostExcerpt
                  link={post.fields.slug}
                  title={post.frontmatter.title || post.fields.slug}
                  date={post.frontmatter.datePublished}
                  authors={post.frontmatter.authors}
                  content={post.frontmatter.description || post.excerpt}
                  language={post.frontmatter.language}
                  keywords={post.frontmatter.keywords}
                  timeToRead={post.timeToRead}
                />
              </li>
            ))}
          </ol>
        </article>
      </Content>
    </Layout>
  );
}

export function Head() {
  return <SEO />;
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___datePublished], order: DESC }
    ) {
      nodes {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          dateCreated(formatString: "MMMM DD, YYYY")
          dateUpdated(formatString: "MMMM DD, YYYY")
          datePublished(formatString: "MMMM DD, YYYY")
          title
          authors
          language
          keywords
          description
        }
      }
    }
    allRepositoriesYaml {
      nodes {
        id
        name
        desc
        path
        keywords
      }
    }
    allGamesYaml {
      nodes {
        id
        name
        desc
        path
        icon
        color
        textColor
      }
    }
  }
`;
