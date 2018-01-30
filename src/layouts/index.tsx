import 'prismjs/themes/prism-okaidia.css';
import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';

import SiteFooter from '../components/site-footer/site-footer';
import SiteHeader from '../components/site-header/site-header';
import { IStoreState, primaryNavigation, toggleSidebar } from '../store';

import '../styles/normalize.css';
import '../styles/styles.scss';
import * as styles from './index.scss';

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
  visible?: boolean;
}

export const DefaultLayout = ({ location, children, visible }: IDefaultLayoutProps) => {
  const { pathname } = location;

  return (
    <div>
      <SiteHeader pathname={pathname} items={primaryNavigation} />
      <div className={styles.pageBody}>
        {children()}
      </div>
      <SiteFooter />
    </div>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IDefaultLayoutProps>(mapStateToProps)(DefaultLayout);