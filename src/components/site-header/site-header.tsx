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
      <SvgIcon icon={Icon.sheets} width={26} height={26} inline />
      <Link to="/" className={styles.headerLogo}>
        <span className={styles.primary}>Sheets.ch</span><span className={styles.secondary}>ad</span>
      </Link>
      <Link to="/posts" className={styles.headerLink}><span>Posts</span></Link>
      <Link to="/projects" className={styles.headerLink}><span>Projects</span></Link>
      <Link to="/ad" className={styles.headerLink}><span>About</span></Link>
    </div>
    <div className={styles.headerIconBar}>
      <Link to="/ad" className={styles.headerLink}>
        <SvgIcon icon={Icon.github} />
      </Link>
    </div>
    <div className={styles.headerFlexPadding} />
    <div className={styles.wellCover} />
  </div>);

export default connect()(SiteHeader);
