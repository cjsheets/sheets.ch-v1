import { graphql } from 'graphql';
import * as React from 'react';

import { ImageSharp, MarkdownRemarkConnection } from '../../@types/graphql-types';
import PostCard from '../components/post-card/post-card';
import PostHeader from '../components/post-header';

// import * as styles from '../styles/post.scss';

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
  const {posts} = this.props.data;
  const tags = this.props.data.tags && this.props.data.tags.group;
  const { pathname } = this.props.location;
  const pageCount = Math.ceil(posts.totalCount / 10);
  const postCardProps = posts.edges.map(({ node }) => {
    const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
    const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
    return ({frontmatter, timeToRead, slug, excerpt, avatar});
  });

  return (
    <div>
      <PostHeader />
      {/* styles.postContainer */}
      <div style={{ justifyContent: 'space-around' }}>
        <div>
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

export default PostPage;
export const pageQuery = graphql`
query PagePostMarkdown {
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
        }
      }
    }
  }
}
`;
