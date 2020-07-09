import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSpring } from 'react-spring';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import ProjectYama from '../ProjectYama/ProjectYama';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import PageContainer from '../PageContainer/PageContainer';
import IBPDetails from '../IBPDetails/IBPDetails';
import JeopardyDetails from '../JeopardyDetails/JeopardyDetails';
import CovidStatDetails from '../CovidStat/CovidStat';
import ScrollToTop from '../ScrollToTop';
import Footer from '../Footer/Footer';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const App = () => {
	const [navOpen, toggleNavOpen] = useState(false);
	const navAnimation = useSpring({
		opacity: navOpen ? 1 : 0,
		transform: navOpen ? `translateY(0)` : `translateY(-100%)`,
	});
	const { colorMode } = useContext(ThemeContext);
	return (
		<>
			<GlobalStyles colorMode={colorMode} />
			<div className="App mg-app">
				<Router>
					<ScrollToTop>
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
					</ScrollToTop>
					<Footer />
				</Router>
			</div>
		</>
	);
};

export default App;
