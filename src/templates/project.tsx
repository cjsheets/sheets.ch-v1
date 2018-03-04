import Link from 'gatsby-link';
import * as React from 'react';

import { MarkdownRemark } from '../../@types/graphql-types';
import PostHeader from '../components/post-header';

import * as sharedStyles from '../styles/shared.scss';

interface IProjectTemplate {
  data: {
    project: MarkdownRemark;
  };
}

class ProjectTemplate extends React.Component<IProjectTemplate, {}> {
  render() {
    const { frontmatter, html, timeToRead } = this.props.data.project;

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
          <div>{frontmatter.author.id}</div>
          <div>{frontmatter.author.bio}</div>
          <div>{frontmatter.createdDate} - {timeToRead} min read</div>
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