import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import * as React from 'react';

import { ImageSharp, MarkdownRemarkConnection, MarkdownRemarkEdge } from '../../@types/graphql-types';
import AuthorBio from '../components/author-bio/author-bio';
import SiteContainer from '../components/site-container/site-container';

import * as styles from '../styles/pages/post.scss';
// import * as sharedStyles from '../styles/shared.module.scss';

interface IPostPage {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pathContext: { tag?: string; };
  location: { pathname: string; };
}

class PostPage extends React.Component<IPostPage, {}> {
  render() {
  const posts = this.props.data.posts.edges.map((edge) => {
    const { frontmatter, timeToRead, fields: { slug }, excerpt } = edge.node;
    return ({frontmatter, timeToRead, slug, excerpt});
  });

  return (
    <SiteContainer location={this.props.location}>
      {posts.map(post => {
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
    </SiteContainer>
  );
  }
}

export default PostPage;

export const pageQuery = graphql`
query PostPageMarkdown {
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/post/" }
    },
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
