import React from 'react';

import SiteContainer from '../components/site-container/site-container';

const ThanksPage = () => (
  <SiteContainer location={{pathname: '/'}}>
    <h1>{'Thanks!'}</h1>
    <p>
      {'Thanks for thaking the time to touch base.'}
    </p>
  </SiteContainer>
)

export default ThanksPage;
