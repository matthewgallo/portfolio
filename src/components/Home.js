import React from 'react';
import Work from './Work';
import Footer from './Footer';
import Intro from './Intro';

import './home.scss';

const Home = () => {
	return (
		<div id="main-content"
className="home-container">
			<Intro />
			<Work />
			<Footer />
		</div>
	);
};

export default Home;
