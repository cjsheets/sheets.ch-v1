import Link from 'gatsby-link';
import { get } from 'lodash';
import * as React from 'react';

import PostHeader from '../components/post-header';
import { ImageSharp, MarkdownRemark, MarkdownRemarkConnection } from '../types/graphql-types';

interface IBlogPost {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
  };
}

export class BlogPost extends React.Component<IBlogPost, {}> {
  render() {
    const { frontmatter, html, timeToRead } = this.props.data.post;
    const avatar = get(frontmatter, 'author.avatar.children', [])[0] as ImageSharp;

    const tags = this.props.data.post.frontmatter.tags
      .map((tag) => <div key={tag}><Link to={`/post/tags/${tag}/`}>{tag}</Link></div>);

    const recents = this.props.data.recents.edges
      .map(({ node }) => {
        const recentAvatar = get(node, 'frontmatter.author.avatar.children', [])[0] as ImageSharp;
        const _recentCover = get(node, 'frontmatter.image.children', [])[0] as ImageSharp;
        const extra = (
          <div>
            <div>
              <div
              />
              <div>
                <div style={{ fontWeight: 400 }}>
                  {node.frontmatter.author.id}
                </div>
                <div style={{ margin: 0 }}>
                  {node.timeToRead} min read
                </div>
              </div>
            </div>
          </div>
        );

        return (
          <div key={node.fields.slug} style={{paddingBottom: '1em'}}>
            <Link
              to={node.fields.slug}
            >
              h
            </Link>
          </div>
        );
      });

    const recentCover = get(frontmatter, 'image.children', [])[0] as ImageSharp;
    return (
      <div>
        <PostHeader />
        <div style={{ border: 'none' }}>
          <div>
            <div>
              <div  />
              <div>
                <div>{frontmatter.author.id}</div>
                <div>{frontmatter.author.bio}</div>
                <div>{frontmatter.createdDate} - {timeToRead} min read</div>
              </div>
            </div>
          </div>
          <div>{frontmatter.title}</div>
        </div>
        <div
          style={{ border: 'none' }}
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
        <div>
          {tags}
        </div>
        <div>
          <div>
            {recents}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
  post: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    timeToRead
    fields {
      slug
    }
    frontmatter {
      tags
      author {
        id
        bio
        twitter
        avatar {
          children {
            ... on ImageSharp {
              responsiveResolution(width: 80, height: 80, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
      title
      createdDate(formatString: "MMM D, YYYY")
    }
  }
  recents: allMarkdownRemark(
    filter: {
      fields: {slug: {ne: $slug}}
      frontmatter: {draft: {ne: true}},
      fileAbsolutePath: {regex: "/post/"},
    },
    sort: {order: DESC, fields: [frontmatter___createdDate]},
    limit: 4
  ) {
    edges {
      node {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 36, height: 36) {
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