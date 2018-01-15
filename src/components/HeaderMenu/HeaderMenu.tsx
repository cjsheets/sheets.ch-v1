import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Icon, Label, Menu } from 'semantic-ui-react-cjs';
import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';

interface IHeaderMenuProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: IHeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as={Link} style={{fontWeight: 700, fontSize: '1.75rem'}}>Chad Sheets</Menu.Item>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch(toggleSidebar())} />
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
