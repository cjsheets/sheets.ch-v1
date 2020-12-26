import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import * as React from 'react';
import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import { AuthorBio } from '../components/author-bio/author-bio';
import Container from '../layout';

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
    <Container>
      {posts.map((post) => {
        const title = get(post, 'frontmatter.title') || post.slug;
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
      <AuthorBio />
    </Container>
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
