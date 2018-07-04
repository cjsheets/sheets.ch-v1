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
    const { location, children } = this.props;

    return (
      <div className={styles.sitePadding}>
        <SiteHeader title={'frontmatter.title'} />
          <Helmet>
            <title>{this.props.pageTitle}</title>
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Open+Sans:400,700' rel='stylesheet' />
          </Helmet>
          <div className={styles.contentContainer}>
            {children}
          </div>
        <SiteFooter />
      </div>
    );
  }
}

export default SiteContainer;
