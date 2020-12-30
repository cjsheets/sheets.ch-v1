import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/layout/layout';
import SEO from '../components/seo/seo';
import config from '../../content/config';

function Landing({ data }) {
  // const postEdges = data.allMarkdownRemark.edges;
  return (
    <Container>
      <div className="landing-container">
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          {/* <PostListing postEdges={postEdges} /> */}
        </div>
      </div>
    </Container>
  );
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
