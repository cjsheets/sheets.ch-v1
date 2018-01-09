import { GatsbyLinkProps } from 'gatsby-link';
import { find, startsWith } from 'lodash';
import * as React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import { IMenuItem, IMenuProps } from '../Menu';

interface ISidebarMenuProps extends IMenuProps {
  visible?: boolean;
  Link: React.ComponentClass<GatsbyLinkProps>;
}

export const SidebarMenu = ({ items, pathname, Link, visible }: ISidebarMenuProps) => {
  const isActive = (item: IMenuItem) => (item.exact) ? pathname === item.path : startsWith(item.path, pathname);
  const activeItem = find(items, (item: IMenuItem) => isActive(item)) || {} as IMenuItem;

  return (
    <Sidebar as={Menu} animation="slide along" width="thin"
      visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item: any) => {
        const active = isActive(item);

        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

export default SidebarMenu;
