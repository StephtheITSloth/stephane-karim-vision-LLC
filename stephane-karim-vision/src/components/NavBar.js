import React from 'react';
import styled from 'styled-components';
import {
	Nav,
	NavBarMenu,
	NavIcon,
	NavLogo,
	NavLink,
	NavItems,
} from './StyledNav';
import { IconContext } from 'react-icons/lib';

const NavBar = () => {
	return (
		<div>
			<Nav></Nav>
			<h2>I am the end of the navbar</h2>
		</div>
	);
};

export default NavBar;
