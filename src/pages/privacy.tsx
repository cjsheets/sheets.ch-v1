import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Container from '../layout';

interface IPrivacy {}

export default function Privacy(props: IPrivacy) {
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
