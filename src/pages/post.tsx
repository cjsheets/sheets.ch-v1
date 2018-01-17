import Link from 'gatsby-link';
import * as React from 'react';

import PostHeader from '../components/post-header';
import PostPagination from '../components/post-pagination/post-pagination';
import TagsCard from '../components/tags-card/tags-card';
import { ImageSharp, MarkdownRemarkConnection } from '../types/graphql-types';

interface IPostProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pathContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
  location: {
    pathname: string;
  };
}

export const Post = (props: IPostProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  // TODO export posts in a proper component
  const Posts = (
    <div>
      {posts.map(({ node }) => {
        const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
        const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
        const cover = frontmatter.image.children[0] as ImageSharp;

        const extra = (
          <div>
            <div>
              <div
              />
              <div>
                <div style={{ fontWeight: 400 }}>
                  {frontmatter.author.id}
                </div>
                <div style={{ margin: 0 }}>
                  {frontmatter.updatedDate} - {timeToRead} min read
              </div>
              </div>
            </div>
          </div>
        );

        const description = (
          <div>
            {excerpt}
            <br />
            <Link to={slug}>Read more…</Link>
          </div>
        );

        return (
          <div key={slug}
          >
            {'header:'} frontmatter.title
            {'src:'} cover.responsiveResolution.src
            {'srcSet:'} cover.responsiveResolution.srcSet
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      {/* Title */}
      <PostHeader />

      {/* Content */}
      <div>
        <div style={{ justifyContent: 'space-around' }}>
          <div style={{ maxWidth: 600 }}>
            {Posts}
            <div>
              <PostPagination Link={Link} pathname={pathname} pageCount={pageCount} />
            </div>
          </div>
          <div>
            <TagsCard Link={Link} tags={tags} tag={props.pathContext.tag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
export const pageQuery = graphql`
query Page {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
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
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                responsiveResolution(width: 700, height: 100) {
                  src
                  srcSet
                }
              }
            }
          }
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
