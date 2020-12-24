import Link from 'gatsby-link';
import * as React from 'react';

import { Icon, SvgIcon } from '../../svg-icon/svg-icon';

import * as styles from './site-header.module.scss';

interface ISiteHeader {
  title: string;
}

export const SiteHeader = (props: ISiteHeader) => (
  <div>
    <div>
      <Link to="/">
        <SvgIcon icon={Icon.sheets} width={26} height={26} inline />
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

export default SiteHeader;
