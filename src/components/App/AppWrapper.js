import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import App from './App';
import GlobalStyles from '../GlobalStyles/GlobalStyles';

const AppWrapper = ({ children }) => {
	return (
		<ThemeProvider>
			<ParallaxProvider>
				<GlobalStyles />
				<App />
				{children}
			</ParallaxProvider>
		</ThemeProvider>
	);
};

AppWrapper.defaultProps = {
	children: null,
};

AppWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppWrapper;
