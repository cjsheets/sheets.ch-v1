import * as React from 'react';

import * as styles from '../styles/pages/index.scss';

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

class IndexPage extends React.Component<IndexPageProps, {}> {

  render() {
    return (
      <div className={styles.latestPostContainer}>
        <div className={styles.latestPost}>
          <span className={styles.latestPostTitle}>
            Latest Post
          </span>
        </div>
      </div>
    );
  }
}

export default IndexPage;
export const pageQuery = graphql`
query IndexPageMarkdown {
  # Get posts
  projects: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/project/" }
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