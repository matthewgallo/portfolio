import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import App from './App';

const AppWrapper = ({ children }) => {
	return (
		<ThemeProvider>
			<App />
			{children}
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
