import { graphql } from 'gatsby'
import React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import SiteContainer from '../components/site-container/site-container';

interface IBlogIndex {
  data: { allMarkdownRemark: MarkdownRemarkConnection; };
  location: any;
}

class BlogIndex extends React.Component<IBlogIndex, {}> {
  render() {
    const content = this.props.data.allMarkdownRemark.edges[0].node.html;

    return (
      <SiteContainer location={this.props.location}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </SiteContainer>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query TosMarkdown {
    allMarkdownRemark(filter: {fields: {slug: {eq: "/tos"}}}) {
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
