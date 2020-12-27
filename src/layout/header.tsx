import Link from 'gatsby-link';
import * as React from 'react';
import SvgIcon, { Icon } from '../components/svg-icon/svg-icon';
import { HeaderContainer, LogoContainer, NavigationContainer } from './header.style';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <SvgIcon icon={Icon.sheets} width={26} height={26} />
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
          <SvgIcon icon={Icon.github} />
        </a>
      </NavigationContainer>
    </HeaderContainer>
  );
}
