import Link from 'gatsby-link';
import * as React from 'react';

import { ImageSharp, MarkdownRemark } from '../../@types/graphql-types';
import PostFooter from '../components/post-footer/post-footer';
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
    const avatar = frontmatter.author.avatar.children && frontmatter.author.avatar.children[0] as ImageSharp;

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
          <PostFooter
            avatar={avatar}
            authorName={frontmatter.author.id}
            authorBio={frontmatter.author.bio}
          />
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