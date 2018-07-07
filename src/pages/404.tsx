import get from 'lodash/get';
import React from 'react';

import SiteContainer from '../components/site-container/site-container';

const NotFoundPage = () => (
  <SiteContainer location={{pathname: '/'}}>
    <h1>{'404 - Page Not Found'}</h1>
    <p>
      {'Sorry, the page you requested is no longer here.'}
    </p>
  </SiteContainer>
)

export default NotFoundPage;
