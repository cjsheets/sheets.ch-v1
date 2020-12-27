import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Container from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/seo/seo';
import config from '../../content/config';
import './listing.css';

function Listing({ pageContext, data }) {
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link key={`listing-page-${pageNum}`} to={pageNum === 1 ? '/' : `/${pageNum}/`}>
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Container>
      <div className="listing-container">
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
        {renderPaging()}
      </div>
    </Container>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }, limit: $limit, skip: $skip) {
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