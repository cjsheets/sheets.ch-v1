import Link, { GatsbyLinkProps } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IStoreState, toggleSidebar } from '../../store';
import { IMenuItem, IMenuProps } from '../Menu';

interface IMobileSidebarProps extends IMenuProps {
  dispatch?: Dispatch<any>;
}

export const MobileSidebar = (props: IMobileSidebarProps) => {
  return (
    <div>
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
    </div>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IMobileSidebarProps>(mapStateToProps)(MobileSidebar);
