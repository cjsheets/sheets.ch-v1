import { graphql } from 'gatsby';
import React from 'react';
import { MarkdownRemarkConnection } from '../graphql-types';
import LayoutContainer from '../components/layout/layout';

interface IPrivacy {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection;
  };
}

export default function Privacy({ data }: IPrivacy) {
  const { node } = data.allMarkdownRemark.edges[0];

  return (
    <LayoutContainer title={node.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </LayoutContainer>
  );
}

export const pageQuery = graphql`
  query PrivacyMarkdown {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/privacy" } } }) {
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
