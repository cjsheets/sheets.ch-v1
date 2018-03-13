import * as React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';

import * as sharedStyles from '../styles/shared.scss';

interface IContactPage {
  data: { home: MarkdownRemarkConnection; };
  location: { pathname: string; };
}

class ContactPage extends React.Component<IContactPage, {}> {

  render() {
    const content = this.props.data.home.edges[0].node.html;
    return (
      <div className={`${sharedStyles.contentBody} ${sharedStyles.contentPadding}`}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default ContactPage;
export const pageQuery = graphql`
  query ContactMarkdown {
    home: allMarkdownRemark(
      filter: {id: {regex: "//home/contact/"}}
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