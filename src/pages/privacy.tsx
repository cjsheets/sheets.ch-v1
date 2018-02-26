import * as React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';

import * as sharedStyles from '../styles/shared.scss';

interface IPrivacyPage {
  data: { home: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

class PrivacyPage extends React.Component<IPrivacyPage, {}> {

  render() {
    const content = this.props.data.home.edges[0].node.html;
    return (
      <div className={`${sharedStyles.contentBody} ${sharedStyles.contentPadding}`}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default PrivacyPage;
export const pageQuery = graphql`
  query PrivacyMarkdown {
    home: allMarkdownRemark(
      filter: {id: {regex: "//home/privacy/"}}
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