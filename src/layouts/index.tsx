import Link from 'gatsby-link';
import 'prismjs/themes/prism-okaidia.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { Segment, Sidebar } from 'semantic-ui-react-cjs';

import Footer from '../components/footer/footer';
import MobileSidebar from '../components/mobile-sidebar/mobile-sidebar';
import SiteHeader from '../components/site-header/site-header';
import { IStoreState, toggleSidebar } from '../store';

import '../css/responsive.css';
import '../css/semantic.min.css';
import '../css/styles.css';

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
    <Sidebar.Pushable as={Segment}>
      <MobileSidebar Link={Link} pathname={pathname} items={menuItems} visible={false} />
      <Sidebar.Pusher style={{ minHeight: '100vh' }} dimmed={visible}>
        <SiteHeader Link={Link} pathname={pathname} items={menuItems} />

        <div style={{ paddingBottom: 60 }}>
          {children()}
        </div>

        <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Footer />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IDefaultLayoutProps>(mapStateToProps)(DefaultLayout);