import { startsWith } from 'lodash';
import * as React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

import { IMenuProps } from '../Menu';

interface IHeaderMenuProps extends IMenuProps {
  option?: any;
}

export const HeaderMenu = ({ items, pathname, Link }: IHeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary>
      Chad Sheets
      {items.map((item: any) => {
        const active = (item.exact) ? pathname === item.path : startsWith(pathname, item.path);

        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
  </Container>;

export default HeaderMenu;
