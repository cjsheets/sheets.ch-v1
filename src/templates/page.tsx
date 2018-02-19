import { graphql } from 'graphql';

import Post from '../pages/post';

export default Post;

export const pageQuery = graphql`
query TemplatePage($skip: Int) {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: {
        draft: { ne: true }
      },
      fileAbsolutePath: { regex: "/post/" }
    }
    limit: 10,
    skip: $skip
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          createdDate(formatString: "DD MMMM, YYYY")
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
