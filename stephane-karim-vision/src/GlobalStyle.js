import styled, { createGlobalStyle } from 'styled-components';
import Background2 from './components/Stylesheet/images/bckg.jpeg';
const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	width: 100;
	height: 100%;
    font-family:'Sacramento', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 20px;
	
}

body {
	min-width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-content: center;
	text-align: center;
	margin-left: 5px;
	background-image: url(${Background2});
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
}
`;


export const Container = styled.div`
	background-color: grey;

	z-index: 1;
	width: 100%;
	max-width: 100;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export default GlobalStyle;

// import Space from './bckgroundImg/Fresh-Turboscent.jpg';
/* background-image: url(${Space}); */
