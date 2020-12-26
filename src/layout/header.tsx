import Link from 'gatsby-link';
import * as React from 'react';
import SvgIcon, { Icon } from '../components/svg-icon/svg-icon';

export default function Header() {
  return (
    <div>
      <div>
        <Link to="/">
          <SvgIcon icon={Icon.sheets} width={26} height={26} />
          <span>Sheets.ch</span>
          <span>ad</span>
        </Link>
        <Link to="/post">
          <span>Posts</span>
        </Link>
        <Link to="/project">
          <span>Projects</span>
        </Link>
        <Link to="/ad">
          <span>About</span>
        </Link>
      </div>
      <div>
        <a href="https://github.com/cjsheets">
          <SvgIcon icon={Icon.github} />
        </a>
      </div>
    </div>
  );
}
