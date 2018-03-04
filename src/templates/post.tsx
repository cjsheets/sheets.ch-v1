import Link from 'gatsby-link';
import * as React from 'react';

import { MarkdownRemark } from '../../@types/graphql-types';
import PostHeader from '../components/post-header';

import * as sharedStyles from '../styles/shared.scss';

interface IPostTemplate {
  data: {
    post: MarkdownRemark;
  };
}

class PostTemplate extends React.Component<IPostTemplate, {}> {
  render() {
    const { frontmatter, html, timeToRead } = this.props.data.post;

    const tags = this.props.data.post.frontmatter.tags
      .map((tag) => <div key={tag}><Link to={`/post/tags/${tag}/`}>{tag}</Link></div>);

    return (
      <div className={sharedStyles.pageBody}>
        <div className={sharedStyles.contentPadding}>
          <PostHeader title={frontmatter.title} />
          <div
            style={{ border: 'none' }}
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
          <div>
            {tags}
          </div>
          <div>{frontmatter.author.id}</div>
          <div>{frontmatter.author.bio}</div>
          <div>{frontmatter.createdDate} - {timeToRead} min read</div>
        </div>
      </div>
    );
  }
}

export default PostTemplate;
export const pageQuery = graphql`
  query PostTemplateMarkdown($slug: String!) {
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
}
`;