import Link from 'gatsby-link';
import * as React from 'react';

export default Footer => {
  return (
  <footer>
    <Link to="/copyright">&copy; {new Date().getFullYear()} Chad Sheets</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/disclaimer">Terms</Link>
    <Link to="/privacy">Privacy</Link>
    <Link to="#">To the Top</Link>
  </footer>
  );
};
