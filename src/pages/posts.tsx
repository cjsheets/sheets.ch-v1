import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { MarkdownRemarkConnection } from '../graphql-types';
import LayoutContainer from '../components/layout/layout';

import '../styles/prism-vs.css';

interface IPostPage {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
}

export default function PostPage({ data }: IPostPage) {
  const posts = data.posts.edges.map((edge) => {
    const {
      frontmatter,
      timeToRead,
      fields: { slug },
      excerpt,
    } = edge.node;
    return { frontmatter, timeToRead, slug, excerpt };
  });

  return (
    <LayoutContainer>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.slug;
        return (
          <div key={post.slug}>
            <h3>
              <Link style={{ boxShadow: 'none' }} to={post.slug}>
                {title}
              </Link>
            </h3>
            <small>{post.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        );
      })}
    </LayoutContainer>
  );
}

export const pageQuery = graphql`
  query PostPageMarkdown {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/post/" } }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            createdDate(formatString: "DD MMMM, YYYY")
            author
          }
        }
      }
    }
  }
`;
