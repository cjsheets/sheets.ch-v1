import { graphql } from 'gatsby'
import get from 'lodash/get';
import React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import SiteContainer from '../components/site-container/site-container';

interface IAbout {
  data: { allMarkdownRemark: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

const About = (props: IAbout) =>(
  <SiteContainer location={props.location}>
    <div dangerouslySetInnerHTML={{__html: get(props, 'data.allMarkdownRemark.edges[0].node.html')}} />
  </SiteContainer>)

export default About;

export const pageQuery = graphql`
  query AboutMarkdown {
    allMarkdownRemark(filter: {fields: {slug: {eq: "/about"}}}) {
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
