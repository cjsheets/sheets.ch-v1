import { graphql } from 'gatsby'
import get from 'lodash/get';
import React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import SiteContainer from '../components/site-container/site-container';

interface ITermsOfService {
  data: { allMarkdownRemark: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

const TermsOfService = (props: ITermsOfService) => (
  <SiteContainer location={props.location}>
    <div dangerouslySetInnerHTML={{__html: get(props, 'data.allMarkdownRemark.edges[0].node.html')}} />
  </SiteContainer>
)

export default TermsOfService;

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
