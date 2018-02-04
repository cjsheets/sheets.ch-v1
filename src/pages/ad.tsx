import * as React from 'react';

import { MarkdownRemarkConnection } from '../types/graphql-types';

interface IPostPage {
  data: { home: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

export class AboutMePage extends React.Component<IPostPage, {}> {

  render() {
    const content = this.props.data.home.edges[0].node.html;
    return (
      <div dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}

export const pageQuery = graphql`
  query AboutMeMarkdown {
    home: allMarkdownRemark(
      filter: {id: {regex: "//home/about-me/"}}
    ) {
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

export default AboutMePage;