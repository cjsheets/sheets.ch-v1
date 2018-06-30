import { Link } from 'gatsby';
import React from 'react';

import SiteFooter from './site-footer/site-footer';
import SiteHeader from './site-header/site-header';

interface ISiteContainer {
  location: string;
}

class SiteContainer extends React.Component<ISiteContainer, {}> {
  render() {
    const { location, children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    // if (location.pathname === rootPath) {

    return (
      <div>
        <SiteHeader title={'frontmatter.title'} />
        {children}
      </div>
    );
  }
}

export default SiteContainer;
