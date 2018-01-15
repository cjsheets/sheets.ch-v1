import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Menu } from 'semantic-ui-react-cjs';

import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';

interface ISiteHeaderProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const SiteHeader = (props: ISiteHeaderProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={props.inverted}>
      <Menu.Item as={props.Link} style={{fontWeight: 700, fontSize: '1.75rem'}}>Chad Sheets</Menu.Item>
      {props.items.map((item) => {
        const active = (item.exact) ? props.pathname === item.path : props.pathname.startsWith(item.path);
        return <Menu.Item
          as={props.Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => props.dispatch(toggleSidebar())} />
    </Menu>
  </Container>;

export default connect()(SiteHeader);
