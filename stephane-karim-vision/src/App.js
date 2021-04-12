import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import './App.css';
import { IconContext } from 'react-icons/lib';
import GlobalStyle from './GlobalStyle';

//import components
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
		<>
			<GlobalStyle />
			<IconContext.Provider value={{ color: 'white' }}>
        <Nav>

        </Nav>
        <Main>

        </Main>
        <Footer>

        </Footer>
			</IconContext.Provider>
    </>
	);
}
