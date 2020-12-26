import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { Container } from '../layout';

interface IAbout {}

export function About(props: IAbout) {
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
