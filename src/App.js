import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSpring } from 'react-spring';

import Header from './components/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import ProjectYama from './ProjectYama';
import NotFound from './components/NotFound';
import About from './components/About/About';
import PageContainer from './components/PageContainer/PageContainer';
import IBPDetails from './components/IBPDetails/IBPDetails';
import JeopardyDetails from './components/JeopardyDetails/JeopardyDetails';
import CovidStatDetails from './components/CovidStat/CovidStat';

import './App.scss';
import './type/type_scale_settings.scss';

const App = () => {
	const [navOpen, toggleNavOpen] = useState(false);
	const navAnimation = useSpring({
		opacity: navOpen ? 1 : 0,
		transform: navOpen ? `translateY(0)` : `translateY(-100%)`,
	});
	return (
		<div className="App">
			<Router>
				<PageContainer>
					<Header navOpen={navOpen}
toggleNavOpen={() => toggleNavOpen(!navOpen)} />
					<Nav style={navAnimation}
toggleNavOpen={() => toggleNavOpen(!navOpen)} />
					<Switch>
						<Route exact
path="/"
component={Home} />
						<Route path="/project-yama"
component={ProjectYama} />
						<Route path="/about-me"
component={About} />
						<Route path="/work/ibm-blockchain-platform"
component={IBPDetails} />
						<Route path="/work/jeopardy"
component={JeopardyDetails} />
						<Route path="/work/covid-stat"
component={CovidStatDetails} />
						<Route component={NotFound} />
					</Switch>
				</PageContainer>
			</Router>
		</div>
	);
};

export default App;
