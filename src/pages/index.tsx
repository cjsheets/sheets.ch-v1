import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import AuthorBio from '../components/author-bio/author-bio';
import SiteContainer from '../components/site-container/site-container';

interface IBlogIndex {
  posts: any;
  location: { pathname: string; };
}

class BlogIndex extends React.Component<IBlogIndex, {}> {
  render() {
    const pageTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.posts.edges');

    return (
      <SiteContainer location={this.props.location} pageTitle={pageTitle}>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
        <AuthorBio />
      </SiteContainer>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/post/|/project/" }
    },
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
