import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import * as React from 'react';

import { ImageSharp, MarkdownRemarkConnection, MarkdownRemarkEdge } from '../../@types/graphql-types';
import AuthorBio from '../components/author-bio/author-bio';
import SiteContainer from '../components/site-container/site-container';

import * as styles from '../styles/pages/post.scss';
// import * as sharedStyles from '../styles/shared.module.scss';

interface IProjectsPage {
  data: {
    tags: MarkdownRemarkConnection;
    projects: MarkdownRemarkConnection;
  };
  pathContext: { tag?: string; };
  location: { pathname: string; };
}

class ProjectPage extends React.Component<IProjectsPage, {}> {
  render() {
  const projects = this.props.data.projects.edges.map((edge) => {
    const { frontmatter, timeToRead, fields: { slug }, excerpt } = edge.node;
    return ({frontmatter, timeToRead, slug, excerpt});
  });

  return (
    <SiteContainer location={this.props.location}>
      {projects.map(project => {
        const title = get(project, 'frontmatter.title') || project.slug;
        return (
          <div key={project.slug}>
            <h3>
              <Link style={{ boxShadow: 'none' }} to={project.slug}>
                {title}
              </Link>
            </h3>
            <small>{project.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: project.excerpt }} />
          </div>
        );
      })}
      <AuthorBio />
    </SiteContainer>
  );
  }
}

export default ProjectPage;

export const pageQuery = graphql`
query ProjectsPageMarkdown {
  projects: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/project/" }
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
          author
        }
      }
    }
  }
}
`;
