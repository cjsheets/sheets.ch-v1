import Link from 'gatsby-link';
import * as React from 'react';

import PostHeader from '../components/post-header';
import { ImageSharp, MarkdownRemark, MarkdownRemarkConnection } from '../types/graphql-types';

interface IPostProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
  };
}

export default (props: IPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post;
  const avatar = frontmatter.author.avatar.children[0] as ImageSharp;

  const tags = props.data.post.frontmatter.tags
    .map((tag) => <div key={tag}><Link to={`/post/tags/${tag}/`}>{tag}</Link></div>);

  const recents = props.data.recents.edges
    .map(({ node }) => {
      const recentAvatar = node.frontmatter.author.avatar.children[0] as ImageSharp;
      const _recentCover = node.frontmatter.image.children[0] as ImageSharp;
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

  const recentCover = frontmatter.image.children[0] as ImageSharp;
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
              <div>{frontmatter.updatedDate} - {timeToRead} min read</div>
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
};

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
      updatedDate(formatString: "MMM D, YYYY")
      image {
        children {
          ... on ImageSharp {
            responsiveResolution(width: 900, height: 300, quality: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
  recents: allMarkdownRemark(
    filter: {
      fields: {slug: {ne: $slug}}
      frontmatter: {draft: {ne: true}},
      fileAbsolutePath: {regex: "/post/"},
    },
    sort: {order: DESC, fields: [frontmatter___updatedDate]},
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
          image {
            children {
              ... on ImageSharp {
                responsiveResolution(width: 300, height: 100) {
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