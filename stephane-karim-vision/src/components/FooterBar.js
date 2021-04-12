import React from 'react';

//Styling
import {
	StyledFooter,
	StyledFooterUl,
	StyledFooterLi,
} from './StyledNav';
import { TiMail } from 'react-icons/ti';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
    return (
			<>
				<StyledFooter>
					<StyledFooterUl>
						<StyledFooterLi>
							Developer: Stephane Karim
							<a href='mailto:stephan.karim.sk@gmail.com'>
								<TiMail />
							</a>
							<a href='https://www.github.com/StephtheITSloth'>
								<SiGithub />
							</a>
						</StyledFooterLi>
					</StyledFooterUl>
				</StyledFooter>
			</>
		);
};

export default Footer;