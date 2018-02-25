import * as React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';

import * as sharedStyles from '../styles/shared.scss';

interface IAboutMePage {
  data: { home: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

class AboutMePage extends React.Component<IAboutMePage, {}> {

  render() {
    const content = this.props.data.home.edges[0].node.html;
    return (
      <div className={`${sharedStyles.contentBody} ${sharedStyles.contentPadding}`}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default AboutMePage;
export const pageQuery = graphql`
  query AboutMeMarkdown {
    home: allMarkdownRemark(
      filter: {id: {regex: "//home/about/"}}
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