import Link from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';

interface ISiteHeaderProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const SiteHeader = (props: ISiteHeaderProps) => (
  <div>Header</div>);

export default connect()(SiteHeader);
