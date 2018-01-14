import Link from 'gatsby-link';
import 'prismjs/themes/prism-okaidia.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button, Container, Icon, Segment, Sidebar } from 'semantic-ui-react-cjs';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import '../css/responsive.css';
import '../css/semantic.min.css';
import '../css/styles.css';
import { IStoreState, toggleSidebar } from '../store';

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
  { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' }
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
  const isHome = pathname === '/';

  return (
    <Sidebar.Pushable as={Segment}>
      <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
      <Sidebar.Pusher style={{ minHeight: '100vh' }} dimmed={visible}>
        {/* Header */}
        {isHome ? null : <HeaderMenu
          Link={Link} pathname={pathname} items={menuItems}
        />}

        {/* Render children pages */}
        <div style={{ paddingBottom: 60 }}>
          {children()}
        </div>

        {/* Footer */}
        <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Container textAlign="center">
            <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
          </Container>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IDefaultLayoutProps>(mapStateToProps)(DefaultLayout);