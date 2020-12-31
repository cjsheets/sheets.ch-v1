import React from 'react';
import { graphql, Link } from 'gatsby';
import LayoutContainer from '../components/layout/layout';
import SEO from '../components/seo/seo';
import PostListing from '../components/post-listing/post-listing';
import { ListContainer, PaginationContainer } from './list-posts.style';

function Listing({ pageContext, data }) {
  function Pagination() {
    const { currentPageNum, pageCount, contentGroup } = pageContext;
    const rootUrl = `/${contentGroup}`;
    const prevPageUrl = currentPageNum - 1 === 1 ? rootUrl : `${rootUrl}/${currentPageNum - 1}`;
    const nextPageUrl = `${rootUrl}/${currentPageNum + 1}`;

    return pageCount === 1 ? null : (
      <PaginationContainer>
        {currentPageNum !== 1 && <Link to={prevPageUrl}>&lsaquo;</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? '/posts' : `/posts/${pageNum}`}
            >
              {pageNum}
            </Link>
          );
        })}
        {currentPageNum !== pageCount && <Link to={nextPageUrl}>&rsaquo;</Link>}
      </PaginationContainer>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;
  const pageTitle = pageContext.contentGroup;

  return (
    <LayoutContainer title={`Chad Sheets - ${pageTitle}`}>
      <SEO />
      <ListContainer>
        <h1>{pageTitle === 'posts' ? 'Posts' : 'Projects'}</h1>
        {postEdges.map((edge) => (
          <PostListing postEdge={edge} />
        ))}
      </ListContainer>
      <Pagination />
    </LayoutContainer>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PostPageMarkdown($skip: Int!, $limit: Int!, $contentGroup: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fields: { contentGroup: { eq: $contentGroup } }
      }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
            date
          }
          frontmatter {
            title
            author
            tags
            date
          }
        }
      }
    }
  }
`;
