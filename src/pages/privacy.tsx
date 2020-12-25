import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import { Container } from '../layout';

interface IPrivacy {
  data: { allMarkdownRemark: MarkdownRemarkConnection };
  location: { pathname: string };
}

const Privacy = (props: IPrivacy) => (
  <Container>
    <div
      dangerouslySetInnerHTML={{ __html: get(props, 'data.allMarkdownRemark.edges[0].node.html') }}
    />
  </Container>
);

export default Privacy;

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
