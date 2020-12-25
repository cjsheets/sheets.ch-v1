import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import { Container } from '../layout';

interface ITermsOfService {
  data: { allMarkdownRemark: MarkdownRemarkConnection };
  location: { pathname: string };
}

const TermsOfService = (props: ITermsOfService) => (
  <Container>
    <div
      dangerouslySetInnerHTML={{ __html: get(props, 'data.allMarkdownRemark.edges[0].node.html') }}
    />
  </Container>
);

export default TermsOfService;

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
