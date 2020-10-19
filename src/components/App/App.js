import React, { useContext, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { AnimatePresence } from 'framer-motion';
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
import Footer from '../Footer/Footer';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import ImageProvider from '../../contexts/imageContext';

const App = () => {
	const location = useLocation();
	const [navOpen, toggleNavOpen] = useState(false);
	const navAnimation = useSpring({
		opacity: navOpen ? 1 : 0,
		transform: navOpen ? `translateY(0)` : `translateY(-100%)`,
	});
	const { colorMode } = useContext(ThemeContext);

	const handleExitComplete = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0 });
		}
	};

	return (
		<>
			<GlobalStyles colorMode={colorMode} />
			<PageContainer>
				<Header navOpen={navOpen}
					toggleNavOpen={() => toggleNavOpen(!navOpen)} />
				<Nav style={navAnimation}
					toggleNavOpen={() => toggleNavOpen(!navOpen)} />
				<ImageProvider>
					<AnimatePresence initial={false}
						exitBeforeEnter
						onExitComplete={handleExitComplete}>
						<Switch location={location}
							key={location.key}>
							<Route exact
								path="/"
								render={() => <Home />} />
							<Route path="/project-yama"
								render={() => <ProjectYama />} />
							<Route path="/about-me"
								render={() => <About />} />
							<Route path="/work/ibm-blockchain-platform"
								render={() => <IBPDetails />} />
							<Route path="/work/jeopardy"
								render={() => <JeopardyDetails />} />
							<Route path="/work/covid-stat"
								render={() => <CovidStatDetails />} />
							<Route component={NotFound} />
						</Switch>
					</AnimatePresence>
				</ImageProvider>
			</PageContainer>
			<Footer />
		</>
	);
};

export default App;
