import Link from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';

import * as styles from './site-header.scss';

interface ISiteHeaderProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const SiteHeader = (props: ISiteHeaderProps) => (
  <div className={styles.stickyHeader}>
    <Link to="/">Chad Sheets</Link> {' '}
    <Link to="/about">About</Link> {' '}
    <Link to="/post">Posts</Link>
  </div>);

export default connect()(SiteHeader);
