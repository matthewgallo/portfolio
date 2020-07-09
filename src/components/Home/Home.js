import React from 'react';
import Work from '../Work/Work';
import Intro from '../Intro/Intro';

const Home = () => {
	return (
		<div id="main-content"
			className="home-container">
			<Intro />
			<Work />
		</div>
	);
};

export default Home;
