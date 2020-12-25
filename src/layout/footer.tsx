import React from 'react';
import Link from 'gatsby-link';
import config from '../../content/config';

export default function Footer() {
  return (
    <footer>
      <Link to="/tos">
        &copy; {new Date().getFullYear()} {config.copyright}
      </Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/contact">Contact</Link>
      <Link to={config.siteRss}>
        <button type="button">Subscribe</button>
      </Link>
    </footer>
  );
}
