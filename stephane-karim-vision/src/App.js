import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import './App.css';
import { IconContext } from 'react-icons/lib';
import GlobalStyle from './GlobalStyle';

//import components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import About from './components/About'
import SignIn from './components/SignIn'

export default function App() {
  return (
		<>
			<GlobalStyle />
			<IconContext.Provider value={{ color: 'white' }}>
				<Nav>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/gallery'>Gallery</Link>
				</Nav>

				<main>
					<Switch>
						<Route path='/' exact />
						<Route path='/about' exact component={About} />
						<Route path='/gallery' component={Gallery} />
						<Route path='/signin' component={SignIn} />
					</Switch>
				</main>

				<Footer></Footer>
			</IconContext.Provider>
		</>
	);
}
