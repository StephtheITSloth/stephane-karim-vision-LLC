import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

//Styling
import {
	Nav,
	NavBarMenu,
	NavIcon,
	NavLogo,
	NavLink,
	NavItems,
} from './StyledNav';
import { IconContext } from 'react-icons/lib';
import { TiThMenuOutline, TiThMenu } from 'react-icons/ti';

const NavBar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};
	return (
		<>
			<Nav>
				<NavLogo to='/'>
					<NavIcon />
					Stephane Karim Photography
				</NavLogo>
				<NavBarMenu onClick={handleClick}>
					{click ? <TiThMenuOutline /> : <TiThMenu />}
				</NavBarMenu>
			</Nav>
		</>
	);
};

export default NavBar;
