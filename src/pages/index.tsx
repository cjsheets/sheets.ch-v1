import { get } from 'lodash';
import * as React from 'react';

import { MarkdownRemark, MarkdownRemarkConnection } from '../../@types/graphql-types';
import * as styles from '../styles/pages/index.scss';

interface IndexPageProps {
  data: {
    posts: MarkdownRemarkConnection;
  };
  location: {
    pathname: string;
  };
}

class IndexPage extends React.Component<IndexPageProps, {}> {

  render() {
    const { posts } = this.props.data;
    const firstPost: MarkdownRemark = get(posts, 'edges[0].node');

    return (
      <div className={styles.latestPostContainer}>
        <div className={styles.latestPost}>
          <span className={styles.latestPostLabel}>
            Latest post:
          </span>
          <div className={styles.latestPostTitle}>
            {firstPost.frontmatter.title}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
export const pageQuery = graphql`
query IndexPageMarkdown {
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/post/" }
    },
    limit: 5
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
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;