import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { Container } from '../layout';

interface ITermsOfService {}

export function TermsOfService(props: ITermsOfService) {
  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: get(props, 'data.allMarkdownRemark.edges[0].node.html'),
        }}
      />
    </Container>
  );
}

export const pageQuery = graphql`
  query TosMarkdown {
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
