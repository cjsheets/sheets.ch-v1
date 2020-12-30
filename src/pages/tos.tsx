import { graphql } from 'gatsby';
import React from 'react';
import { MarkdownRemarkConnection } from '../graphql-types';
import LayoutContainer from '../components/layout/layout';

interface ITermsOfService {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection;
  };
}

export default function TermsOfService({ data }: ITermsOfService) {
  const { node } = data.allMarkdownRemark.edges[0];

  return (
    <LayoutContainer title={node.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </LayoutContainer>
  );
}

export const pageQuery = graphql`
  query TermsOfServiceMarkdown {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/tos" } } }) {
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
