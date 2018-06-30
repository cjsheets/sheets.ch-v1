import Link from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Icon, SvgIcon } from '../svg-icon/svg-icon';

import * as styles from './site-header.scss';

interface ISiteHeader {
  dispatch: Dispatch<any>;
}

export const SiteHeader = (props: ISiteHeader) => (
  <div className={styles.stickyHeader}>
    <div className={styles.wellCover} />
    <div className={styles.headerFlexPadding} />
    <div className={styles.headerNavigation}>
      <Link to="/" className={styles.headerLogo}>
        <SvgIcon icon={Icon.sheets} width={26} height={26} inline />
        <span className={styles.primary}>Sheets.ch</span><span>ad</span>
      </Link>
      <Link to="/posts" className={styles.headerLink}><span>Posts</span></Link>
      <Link to="/projects" className={styles.headerLink}><span>Projects</span></Link>
      <Link to="/ad" className={styles.headerLink}><span>About</span></Link>
    </div>
    <div className={styles.headerIconBar}>
      <a href="https://github.com/cjsheets" className={styles.headerLink}>
        <SvgIcon icon={Icon.github} />
      </a>
    </div>
    <div className={styles.headerFlexPadding} />
    <div className={styles.wellCover} />
  </div>);

export default connect()(SiteHeader);
