import Link from 'gatsby-link';
import * as React from 'react';

import * as styles from './Footer.module.css';

export default Footer => {
  return (
  <footer className={styles.link}>
    <Link to="/copyright">&copy; {new Date().getFullYear()} Chad Sheets</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/disclaimer">Terms</Link>
    <Link to="/privacy">Privacy</Link>
    <Link to="#">To the Top</Link>
  </footer>
  );
};
