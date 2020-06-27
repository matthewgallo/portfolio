import React from 'react';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';

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
