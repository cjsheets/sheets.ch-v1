import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import { Container } from '../layout';

interface IAbout {
  data: { allMarkdownRemark: MarkdownRemarkConnection };
  location: { pathname: string };
}

const About = (props: IAbout) => (
  <Container>
    <div
      dangerouslySetInnerHTML={{ __html: get(props, 'data.allMarkdownRemark.edges[0].node.html') }}
    />
  </Container>
);

export default About;

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
