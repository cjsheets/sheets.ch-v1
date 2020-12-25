import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Container } from '../layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../content/config';

export default function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Container>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </div>
    </Container>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
