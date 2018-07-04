import React from 'react';
import Helmet from 'react-helmet';

import SiteFooter from './site-footer/site-footer';
import SiteHeader from './site-header/site-header';

interface ISiteContainer {
  location: string;
  pageTitle?: string;
}

import '../../styles/normalize.css';
import '../../styles/prism-vs.css';
import '../../styles/theme.scss';
import * as styles from './site-container.module.scss';

class SiteContainer extends React.Component<ISiteContainer, {}> {
  render() {
    return [
      this.renderHead(),
      this.renderHeader(),
      this.renderBody(),
      this.renderFooter()
    ];
  }

  renderHead = () =>
    <Helmet>
      <title>{this.props.pageTitle}</title>
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Open+Sans:400,700' rel='stylesheet' />
    </Helmet>

  renderHeader = () =>
    <SiteHeader title={'frontmatter.title'} />

  renderBody = () =>
    <div className={styles.contentContainer}>
      {this.props.children}
    </div>

  renderFooter = () =>
    <SiteFooter />
}

export default SiteContainer;
