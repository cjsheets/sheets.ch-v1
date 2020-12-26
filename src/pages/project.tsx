import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import * as React from 'react';
import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import { AuthorBio } from '../components/author-bio/author-bio';
import { Container } from '../layout';

interface IProjectsPage {
  data: {
    tags: MarkdownRemarkConnection;
    projects: MarkdownRemarkConnection;
  };
}

export function ProjectPage({ data }: IProjectsPage) {
  const projects = data.projects.edges.map((edge) => {
    const {
      frontmatter,
      timeToRead,
      fields: { slug },
      excerpt,
    } = edge.node;
    return { frontmatter, timeToRead, slug, excerpt };
  });

  return (
    <Container>
      {projects.map((project) => {
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
    </Container>
  );
}

export const pageQuery = graphql`
  query ProjectsPageMarkdown {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/project/" } }
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
