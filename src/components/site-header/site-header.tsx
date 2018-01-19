import { HeroHeader, Nav, NavItem, NavLeft, NavRight } from 'bloomer';
import Link from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';

interface ISiteHeaderProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const SiteHeader = (props: ISiteHeaderProps) => (
  <HeroHeader>
    <Nav>
        <NavLeft>
            <NavItem isBrand>Bloomer</NavItem>
        </NavLeft>
        <NavRight isMenu>
            <NavItem>Home</NavItem>
            <NavItem>Documentation</NavItem>
        </NavRight>
    </Nav>
</HeroHeader>);

export default connect()(SiteHeader);
