import Link from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';
import { Icon, SvgIcon } from '../svg-icon/svg-icon';

import * as styles from './site-header.scss';

interface ISiteHeaderProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const SiteHeader = (props: ISiteHeaderProps) => (
  <div className={styles.stickyHeader}>
    <div className={styles.headerLogo}>
      <Link to="/">Sheets.ch/ad</Link>
    </div>
    <div className={styles.headerNavigation}>
      <Link to="/post"><span>Home</span></Link>
      <Link to="/post"><span>Posts</span></Link>
      <Link to="/projects"><span>Projects</span></Link>
      <Link to="/ad"><span>About</span></Link>
    </div>
    <div className={styles.headerIconBar}>
      <SvgIcon icon={Icon.github} />
    </div>
  </div>);

export default connect()(SiteHeader);
