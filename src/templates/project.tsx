import Link from 'gatsby-link';
import * as React from 'react';

import { ImageSharp, MarkdownRemark } from '../../@types/graphql-types';
import PostFooter from '../components/post-footer/post-footer';
import PostHeader from '../components/post-header';

import * as sharedStyles from '../styles/shared.scss';

interface IProjectTemplate {
  data: {
    project: MarkdownRemark;
  };
}

class ProjectTemplate extends React.Component<IProjectTemplate, {}> {
  render() {
    const { frontmatter, html } = this.props.data.project;
    const avatar = frontmatter.author.avatar.children && frontmatter.author.avatar.children[0] as ImageSharp;

    const tags = this.props.data.project.frontmatter.tags
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

export default ProjectTemplate;
export const pageQuery = graphql`
  query ProjectTemplateMarkdown($slug: String!) {
  project: markdownRemark(fields: {slug: {eq: $slug}}) {
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