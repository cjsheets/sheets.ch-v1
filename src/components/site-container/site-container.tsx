import React from 'react';

import SiteFooter from './site-footer/site-footer';
import SiteHeader from './site-header/site-header';

interface ISiteContainer {
  location: string;
}

class SiteContainer extends React.Component<ISiteContainer, {}> {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <SiteHeader title={'frontmatter.title'} />
        {children}
        <SiteFooter />
      </div>
    );
  }
}

export default SiteContainer;
