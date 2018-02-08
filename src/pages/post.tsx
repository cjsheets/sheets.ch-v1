import { get } from 'lodash';
import * as React from 'react';

import PostCard from '../components/post-card/post-card';
import PostHeader from '../components/post-header';
import PostPagination from '../components/post-pagination/post-pagination';
import TagsCard from '../components/tags-card/tags-card';
import { ImageSharp, MarkdownRemarkConnection } from '../types/graphql-types';

import * as styles from './post.scss';

interface IPostPage {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pathContext: { tag?: string; };
  location: { pathname: string; };
}

export class PostPage extends React.Component<IPostPage, {}> {
  render() {
  const tags = this.props.data.tags.group;
  const { pathname } = this.props.location;
  const pageCount = Math.ceil(this.props.data.posts.totalCount / 10);
  const postCardProps = this.props.data.posts.edges.map(({ node }) => {
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

export default PostPage;
export const pageQuery = graphql`
query PostPageMarkdown {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
  # Get posts
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
          tags
        }
      }
    }
  }
}
`;
