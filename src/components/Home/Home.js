import React from 'react';
// import Work from '../Work/Work';
import Intro from '../Intro/Intro';
import { AboutMe } from '../AboutMe/AboutMe';
import { OtherProjects } from '../OtherProjects/OtherProjects';

const Home = () => {
	return (
		<div id="main-content"
			className="home-container">
			<Intro />
			<AboutMe />
			<OtherProjects />
			{/* <Work /> */}
		</div>
	);
};

export default Home;
