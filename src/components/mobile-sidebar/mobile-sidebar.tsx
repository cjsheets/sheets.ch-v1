import Link, { GatsbyLinkProps } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { SidebarStyles } from 'react-sidebar';
import { Dispatch } from 'redux';

import { IStoreState, toggleSidebar } from '../../store';
import { IMenuItem, IMenuProps } from '../Menu';

interface IMobileSidebarProps extends IMenuProps {
  dispatch?: Dispatch<any>;
}

export const mobileSidebarStyles: SidebarStyles = {
  root: { zIndex: '900' },
  sidebar: { zIndex: '902' },
  content: { zIndex: '900', overflowY: 'hidden' },
  overlay: { zIndex: '901' },
  dragHandle: {zIndex: '900' }
};

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
