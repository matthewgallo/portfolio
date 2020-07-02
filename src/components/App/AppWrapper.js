import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import App from './App';
import GlobalStyles from '../GlobalStyles/GlobalStyles';

const AppWrapper = ({ children }) => {
	return (
		<ThemeProvider>
			<GlobalStyles />
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
