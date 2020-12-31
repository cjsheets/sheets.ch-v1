import { graphql } from 'gatsby';
import React from 'react';
import { MarkdownRemarkConnection } from '../graphql-types';
import LayoutContainer from '../components/layout/layout';

interface IAbout {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection;
  };
}

export default function About({ data }: IAbout) {
  const { node } = data.allMarkdownRemark.edges[0];

  return (
    <LayoutContainer title={node.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </LayoutContainer>
  );
}

export const pageQuery = graphql`
  query AboutMarkdown {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/about" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
