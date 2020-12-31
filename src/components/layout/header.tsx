import Link from 'gatsby-link';
import * as React from 'react';
import SheetsLogo from '../../../assets/icons/sheets-logo.svg';
import GitHubLogo from '../github-icon/github-icon';
import { HeaderContainer, LogoContainer, NavigationContainer } from './header.style';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>
          <SheetsLogo width={32} height={32} />
          <span>Sheets.ch</span>
          <span>ad</span>
        </LogoContainer>
      </Link>
      <NavigationContainer>
        <Link to="/posts">Posts</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <a href="https://github.com/cjsheets">
          <GitHubLogo cornerRadiusPercent={50} width={24} height={24} />
        </a>
      </NavigationContainer>
    </HeaderContainer>
  );
}
