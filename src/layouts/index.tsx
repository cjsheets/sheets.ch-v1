import 'prismjs/themes/prism-okaidia.css';
import * as React from 'react';
import { connect } from 'react-redux';

import MobileSidebar from '../components/mobile-sidebar/mobile-sidebar';
import SiteFooter from '../components/site-footer/site-footer';
import SiteHeader from '../components/site-header/site-header';
import { IStoreState, primaryNavigation, toggleSidebar } from '../store';

import '../styles/normalize.css';
import * as styles from '../styles/styles.scss';


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
    <div className={styles.siteBody}>
      <SiteHeader pathname={pathname} items={primaryNavigation} />
      <MobileSidebar items={primaryNavigation} />
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