import styled from 'styled-components';
import Image from './Stylesheet/images/ButtonImage.jpeg'


export const Btn = styled.button`
	border-radius: 5px;
	background: #ffad99;
	white-space: nowrap;
	width: 2px;
	margin-left: 2%;
	margin-right: 2%;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 4px;

	&:hover {
		transition: all 0.3s ease-out;
		background: white;
		background: ${({ primary }) => (primary ? '#ff3300' : '#3366ff')};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const LogInBtn = styled(Btn)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border-left: 5px;
	outline: none;

	${Btn}
`;

export const StyledForm = styled.section`
	background: url(${Image});
	opacity: 0.7;
	border-radius: 4px;
	height: 25%;
	width: 100%;
	padding: 5%;
    margin-top: 10%;
	/* margin-right: 10%; */
	/* margin-left: 10%; */

`;
