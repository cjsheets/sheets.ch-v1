import Link, { GatsbyLinkProps } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IStoreState, toggleSidebar } from '../../store';
import { IMenuItem, IMenuProps } from '../Menu';

interface IMobileSidebarProps extends IMenuProps {
  visible?: boolean;
  dispatch?: Dispatch<any>;
  Link: React.ComponentClass<GatsbyLinkProps>;
}

export const MobileSidebar = (props: IMobileSidebarProps) => {
  const isActive = (item: IMenuItem) => (item.exact) ? props.pathname === item.path : props.pathname.startsWith(item.path);
  const activeItem = props.items.find((item: IMenuItem) => isActive(item)) || {} as IMenuItem;
  return (
    <div onBlur={() => props.dispatch(toggleSidebar())}>
      {props.items.map((item) => {
        const active = isActive(item);
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
    </div>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IMobileSidebarProps>(mapStateToProps)(MobileSidebar);
