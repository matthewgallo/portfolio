import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLOR_MODE_KEY, CURRENT_COLOR_MODE_CSS_PROP, INITIAL_COLOR_MODE_CSS_PROP } from '../../theme';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [colorMode, rawSetColorMode] = useState(undefined);

	useEffect(() => {
		const root = window.document.body;
		const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);
		rawSetColorMode(initialColorValue);
		function setColorsByTheme() {
			const colors = COLORS;
			const colorModeKey = COLOR_MODE_KEY;
			const colorModeCssProp = INITIAL_COLOR_MODE_CSS_PROP;
			const currentModeCssProp = CURRENT_COLOR_MODE_CSS_PROP;

			const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
			const prefersDarkFromMedia = systemPrefersDark.matches;
			const persistedPreference = localStorage.getItem(colorModeKey);

			let colorMode2 = 'light';
			const hasUsedToggle = typeof persistedPreference === 'string';

			if (hasUsedToggle) {
				colorMode2 = persistedPreference;
			} else {
				colorMode2 = prefersDarkFromMedia ? 'dark' : 'light';
			}
			rawSetColorMode(colorMode2);

			root.style.setProperty(colorModeCssProp, colorMode2);
			root.style.setProperty(currentModeCssProp, colorMode2);

			Object.entries(colors).forEach(([name, colorByTheme]) => {
				const cssVariableName = `--color-${name}`;
				const setColorThemeValues = colorMode2 === 'dark' ? colorByTheme.dark : colorByTheme.light;

				root.style.setProperty(cssVariableName, setColorThemeValues);
			});
		}

		setColorsByTheme();
	}, []);

	const contextValue = useMemo(() => {
		function setColorMode(newValue) {
			const root = window.document.body;
			const currentModeCssProp = CURRENT_COLOR_MODE_CSS_PROP;
			localStorage.setItem(COLOR_MODE_KEY, newValue);

			Object.entries(COLORS).forEach(([name, colorByTheme]) => {
				const cssVariableName = `--color-${name}`;

				root.style.setProperty(cssVariableName, colorByTheme[newValue]);
			});
			root.style.setProperty(currentModeCssProp, newValue);

			rawSetColorMode(newValue);
		}

		return {
			colorMode,
			setColorMode,
		};
	}, [colorMode, rawSetColorMode]);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ThemeContext, ThemeProvider };
