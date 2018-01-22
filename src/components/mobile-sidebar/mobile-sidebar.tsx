import Link, { GatsbyLinkProps } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { Dispatch } from 'redux';

import { IStoreState, toggleSidebar } from '../../store';
import { IMenuItem, IMenuProps } from '../Menu';

interface IMobileSidebarProps extends IMenuProps {
  visible?: boolean;
  dispatch?: Dispatch<any>;
  children: React.ReactChildren;
}

export const MobileSidebar = (props: IMobileSidebarProps) => {
  return (
    <Sidebar >
      {props.items.map((item) => {
        return (
          <Link
            to={item.path}
            key={item.path}
            onClick={() => props.dispatch(toggleSidebar())}
          >
            {item.name}
          </Link>
        );
      })}
    </Sidebar>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IMobileSidebarProps>(mapStateToProps)(MobileSidebar);
