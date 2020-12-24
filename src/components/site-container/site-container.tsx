import React from 'react';
import Helmet from 'react-helmet';

import SiteFooter from './site-footer/site-footer';
import SiteHeader from './site-header/site-header';

interface ISiteContainer {
  location: { pathname: string };
  pageTitle?: string;
}

import '../../styles/normalize.css';
import '../../styles/prism-vs.css';

class SiteContainer extends React.Component<ISiteContainer, {}> {
  render() {
    return [this.renderHead(), this.renderHeader(), this.renderBody(), this.renderFooter()];
  }

  renderHead = () => (
    <Helmet key="site-container-head">
      <title>{this.props.pageTitle}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400|Open+Sans:400,700"
        rel="stylesheet"
      />
    </Helmet>
  );

  renderHeader = () => <SiteHeader title={'frontmatter.title'} key="site-container-header" />;

  renderBody = () => <div key="site-container-body">{this.props.children}</div>;

  renderFooter = () => <SiteFooter key="site-container-footer" />;
}

export default SiteContainer;
