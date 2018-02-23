import { get } from 'lodash';
import * as React from 'react';
import Particles from 'react-particles-js';

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
      <div>
        <div className={styles.latestPostContainer}>
          <div className={styles.latestPost}>
            <Particles
              width="100%"
              height="125px"
              params={{
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  line_linked: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 1
                  },
                  opacity: {
                    value: 0.15,
                    random: false
                  }
                }
              }}
              style={{
                left: 0,
                position: 'absolute',
                top: 0
              }}
            />
            <span className={styles.latestPostLabel}>
              Latest post:
            </span>
            <div className={styles.latestPostTitle}>
              {firstPost.frontmatter.title}
            </div>
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