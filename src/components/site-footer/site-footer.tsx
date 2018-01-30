import Link from 'gatsby-link';
import * as React from 'react';

import * as styles from './site-footer.scss';

export const SiteFooter = () => (
  <footer className={styles.link}>
    <Link to="/copyright">&copy; {new Date().getFullYear()} Sheets.Ch/ad</Link>
    <Link to="/disclaimer">Terms</Link>
    <Link to="/privacy">Privacy</Link>
    <Link to="/contact">Contact</Link>
  </footer>
);

export default SiteFooter;