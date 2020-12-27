import Link from 'gatsby-link';
import * as React from 'react';
import SheetsLogo from '../../assets/icons/sheets-logo.svg';
import GitHubLogo from '../../assets/icons/github.svg';
import { HeaderContainer, LogoContainer, NavigationContainer } from './header.style';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <SheetsLogo width={26} height={26} />
          <span>Sheets.ch</span>
          <span>ad</span>
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <Link to="/post">
          <span>Posts</span>
        </Link>
        <Link to="/project">
          <span>Projects</span>
        </Link>
        <Link to="/ad">
          <span>About</span>
        </Link>
        <a href="https://github.com/cjsheets">
          <GitHubLogo width={26} height={26} />
        </a>
      </NavigationContainer>
    </HeaderContainer>
  );
}
