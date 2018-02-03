import Link from 'gatsby-link';
import { get } from 'lodash';
import * as React from 'react';

import PostHeader from '../components/post-header';
import PostPagination from '../components/post-pagination/post-pagination';
import TagsCard from '../components/tags-card/tags-card';
import { ImageSharp, MarkdownRemarkConnection } from '../types/graphql-types';

interface IPostPage {
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

export class PostPage extends React.Component<IPostPage, {}> {

  render() {
  const tags = this.props.data.tags.group;
  const posts = this.props.data.posts.edges;
  const { pathname } = this.props.location;
  const pageCount = Math.ceil(this.props.data.posts.totalCount / 10);

  // TODO export posts in a proper component
  const Posts = (
    <div>
      {posts.map(({ node }) => {
        const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
        const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
        const cover = get(frontmatter, 'image.children', [])[0] as ImageSharp;

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
            {frontmatter.title}
            {cover.responsiveResolution.src}
            {cover.responsiveResolution.srcSet}
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <PostHeader />

      <div style={{ justifyContent: 'space-around' }}>
        <div style={{ maxWidth: 600 }}>
          {Posts}
          <div>
            <PostPagination Link={Link} pathname={pathname} pageCount={pageCount} />
          </div>
        </div>
        <div>
          <TagsCard Link={Link} tags={tags} tag={this.props.pathContext.tag} />
        </div>
      </div>
    </div>
  );
  }
}

export default PostPage;
export const pageQuery = graphql`
query PageBlog {
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
