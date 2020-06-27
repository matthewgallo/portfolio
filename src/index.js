import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './components/App/App';
import './index.scss';

ReactDOM.render(
	<ParallaxProvider>
		<App />
	</ParallaxProvider>,
	document.getElementById('root')
);
