import * as React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';

import * as sharedStyles from '../styles/shared.scss';

interface IThanksPage {
  data: { home: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

class ThanksPage extends React.Component<IThanksPage, {}> {

  render() {
    const content = this.props.data.home.edges[0].node.html;
    return (
      <div className={`${sharedStyles.contentBody} ${sharedStyles.contentPadding}`}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default ThanksPage;
export const pageQuery = graphql`
  query ThanksMarkdown {
    home: allMarkdownRemark(
      filter: {id: {regex: "//home/thanks/"}}
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