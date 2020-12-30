import React from 'react';
import Link from 'gatsby-link';
import config from '../../../content/config';
import { Copyright, ExternalLinks, FooterContainer, Terms } from './footer.style';
import GitHubLogo from '../../../assets/icons/github.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>&copy; {new Date().getFullYear()} Chad Sheets</Copyright>
      <ExternalLinks>
        <a href="https://github.com/cjsheets">
          <GitHubLogo width={26} height={26} />
        </a>
        <a href="https://github.com/cjsheets">LinkedIn</a>
        <Link to="/contact">Contact</Link>
        <Link to={config.siteRss}>
          <button type="button">Subscribe</button>
        </Link>
      </ExternalLinks>
      <Terms>
        <Link to="/tos">Terms</Link>
        <Link to="/privacy">Privacy</Link>
      </Terms>
    </FooterContainer>
  );
}
