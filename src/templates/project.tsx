import Link from 'gatsby-link';
import * as React from 'react';

import { MarkdownRemark, MarkdownRemarkConnection } from '../../@types/graphql-types';
import PostHeader from '../components/post-header';

interface IProjectTemplate {
  data: {
    project: MarkdownRemark;
    recents: MarkdownRemarkConnection;
  };
}

export default class ProjectTemplate extends React.Component<IProjectTemplate, {}> {
  render() {
    const { frontmatter, html, timeToRead } = this.props.data.project;

    const tags = this.props.data.project.frontmatter.tags
      .map((tag) => <div key={tag}><Link to={`/post/tags/${tag}/`}>{tag}</Link></div>);

    const recents = this.props.data.recents.edges
      .map(({ node }) => {
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

export const pageQuery = graphql`
  query ProjectTemplate($slug: String!) {
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