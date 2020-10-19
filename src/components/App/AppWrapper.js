import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import App from './App';

const AppWrapper = ({ children }) => {
	return (
		<ThemeProvider>
			<div className="App mg-app">
				<Router>
					<App />
				</Router>
			</div>
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
