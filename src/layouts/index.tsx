import Link from 'gatsby-link';
import 'prismjs/themes/prism-okaidia.css';
import * as React from 'react';
import { connect } from 'react-redux';

import Footer from '../components/footer/footer';
import Mobilediv from '../components/mobile-sidebar/mobile-sidebar';
import SiteHeader from '../components/site-header/site-header';
import { IStoreState, toggleSidebar } from '../store';

import '../styles/styles.css';

export const menuItems = [
  { name: 'Posts', path: '/post', exact: false },
  { name: 'About', path: '/about', exact: true }
];

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
      {/* <Mobilediv Link={Link} pathname={pathname} items={menuItems} visible={false} /> */}
      <div style={{ minHeight: '100vh' }}>
        <SiteHeader Link={Link} pathname={pathname} items={menuItems} />

        <div style={{ paddingBottom: 60 }}>
          {children()}
        </div>

        <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IDefaultLayoutProps>(mapStateToProps)(DefaultLayout);