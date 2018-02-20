import * as React from 'react';

import { ImageSharp, MarkdownRemarkConnection } from '../../@types/graphql-types';
import PostCard from '../components/post-card/post-card';
import PostHeader from '../components/post-header';

import * as styles from '../styles/pages/post.scss';

interface IProjectsPage {
  data: {
    tags: MarkdownRemarkConnection;
    projects: MarkdownRemarkConnection;
  };
  pathContext: { tag?: string; };
  location: { pathname: string; };
}

class ProjectsPage extends React.Component<IProjectsPage, {}> {
  render() {
  const {projects} = this.props.data;
  const tags = this.props.data.tags && this.props.data.tags.group;
  const { pathname } = this.props.location;
  const pageCount = Math.ceil(projects.totalCount / 10);
  const postCardProps = projects.edges.map(({ node }) => {
    const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
    const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
    return ({frontmatter, timeToRead, slug, excerpt, avatar});
  });

  return (
    <div>
      <PostHeader />
      <div style={{ justifyContent: 'space-around' }}>
        <div className={styles.postContainer}>
          {postCardProps.map(props => <PostCard {...props} key={props.slug} />)}
          <div>
            {tags}
            {pathname}
            {pageCount}
            {/* <PostPagination Link={Link} pathname={pathname} pageCount={pageCount} /> */}
          </div>
        </div>
        <div>
          {/* <TagsCard Link={Link} tags={tags} tag={this.props.pathContext.tag} /> */}
        </div>
      </div>
    </div>
  );
  }
}

export default ProjectsPage;
export const pageQuery = graphql`
query ProjectsPageMarkdown {
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
