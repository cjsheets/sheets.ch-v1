import { get } from 'lodash';
import * as React from 'react';
import Particles from 'react-particles-js';

import { MarkdownRemark, MarkdownRemarkConnection } from '../../@types/graphql-types';
import * as tux from '../assets/tux-pajamas.png';
import { Icon, SvgIcon } from '../components/svg-icon/svg-icon';

import * as styles from '../styles/pages/index.scss';
import * as sharedStyles from '../styles/shared.scss';

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
    const particleParams = {
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
    };

    return (
      <div>
        <div className={`${styles.introStatementContainer} ${sharedStyles.pageBody}`}>
          <div className={sharedStyles.pagePadding}>
            <h3>Hey there, I'm Chad, a software engineer who enjoys tinkering with Linux and OSS.</h3>
          </div>
          <div>
            <img src={tux} className={styles.introMessageImage} />
          </div>
        </div>
        <div className={styles.latestPostContainer}>
          <div className={styles.latestPost}>
            <Particles
              width="100%"
              height="125px"
              params={particleParams}
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
        <div>
          <SvgIcon icon={Icon.debian} inline />
          <SvgIcon icon={Icon.netlify} inline />
          <SvgIcon icon={Icon.nodejs} inline />
          <SvgIcon icon={Icon.react} inline />
          <SvgIcon icon={Icon.typescript} inline />
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