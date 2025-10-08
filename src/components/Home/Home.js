import React from 'react';
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
		</div>
	);
};

export default Home;
