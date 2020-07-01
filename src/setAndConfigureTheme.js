import React from 'react';
import Terser from 'terser';
import { COLOR_MODE_KEY, COLORS, INITIAL_COLOR_MODE_CSS_PROP } from './theme';

import AppWrapper from './components/App/AppWrapper';

function setColorsByTheme() {
	const colors = '🌈';
	const colorModeKey = '🔑';
	const colorModeCssProp = '⚡️';

	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	const prefersDarkFromMedia = systemPrefersDark.matches;
	const persistedPreference = localStorage.getItem(colorModeKey);

	let colorMode = 'light';
	const hasUsedToggle = typeof persistedPreference === 'string';

	if (hasUsedToggle) {
		colorMode = persistedPreference;
	} else {
		colorMode = prefersDarkFromMedia ? 'dark' : 'light';
	}

	const root = document.body;
	root.style.setProperty(colorModeCssProp, colorMode);

	Object.entries(colors).forEach(([name, colorByTheme]) => {
		const cssVariableName = `--color-${name}`;

		root.style.setProperty(cssVariableName, colorByTheme[colorMode]);
	});
}

const MagicScriptTag = () => {
	const boundFn = String(setColorsByTheme)
		.replace("'🌈'", JSON.stringify(COLORS))
		.replace('🔑', COLOR_MODE_KEY)
		.replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

	let calledFunction = `(${boundFn})()`;

	calledFunction = Terser.minify(calledFunction).code;

	// eslint-disable-next-line react/no-danger
	return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

// This will get run if javascript is disabled in the users browser
const FallbackStyles = () => {
	const cssVariableString = Object.entries(COLORS).reduce((acc, [name, colorByTheme]) => {
		return `${acc}\n--color-${name}: ${colorByTheme.light};`;
	}, '');

	// set the css variables
	const wrappedInSelector = `html { ${cssVariableString} }`;

	return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeaderComponents }) => {
	setHeaderComponents(<FallbackStyles />);
	setPreBodyComponents(<MagicScriptTag />);
};

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element }) => {
	return <AppWrapper>{element}</AppWrapper>;
};
