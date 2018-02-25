import * as React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';

import * as sharedStyles from '../styles/shared.scss';

interface ITosPage {
  data: { home: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

class TosPage extends React.Component<ITosPage, {}> {

  render() {
    const content = this.props.data.home.edges[0].node.html;
    return (
      <div className={`${sharedStyles.contentBody} ${sharedStyles.contentPadding}`}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default TosPage;
export const pageQuery = graphql`
  query TosMarkdown {
    home: allMarkdownRemark(
      filter: {id: {regex: "//home/tos/"}}
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