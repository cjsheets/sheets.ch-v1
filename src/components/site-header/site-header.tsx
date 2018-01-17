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

export const SiteHeader = (props: ISiteHeaderProps) =>
  <div>
    <div >
      <Link
        to="/"
        style={{fontWeight: 700, fontSize: '1.75rem'}}
      >Chad Sheets</Link>
      {props.items.map((item) => {
        const active = (item.exact) ? props.pathname === item.path : props.pathname.startsWith(item.path);
        return <Link
          as={props.Link}
          className="mobile hidden"
          to={item.path}
          key={item.path}
        />;
      })}
      <a className="mobile only" onClick={() => props.dispatch(toggleSidebar())} />
    </div>
  </div>;

export default connect()(SiteHeader);
