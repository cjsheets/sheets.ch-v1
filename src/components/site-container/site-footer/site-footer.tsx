import Link from 'gatsby-link';
import * as React from 'react';

import * as styles from './site-footer.module.scss';

export const SiteFooter = () => (
  <footer className={`${styles.siteFooter} ${styles.link}`}>
    <Link to='/tos'>&copy; {new Date().getFullYear()} Sheets.Ch/ad</Link>
    <Link to='/privacy'>Privacy</Link>
    <Link to='/contact'>Contact</Link>
  </footer>
);

export default SiteFooter;