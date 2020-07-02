import React, { useContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const ThemeToggle = () => {
	const { colorMode, setColorMode } = useContext(ThemeContext);
	const themeButton = useRef();

	const toggleSunAnimation = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'scale(1)',
				top: '-.5rem',
				right: '-.5rem',
				config: { duration: 1000 },
			});
		},
		from: {
			opacity: 1,
		},
	});

	const toggleMoonAnimation = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'scale(0.1)',
				top: '-2rem',
				right: '-2rem',
				config: { duration: 1000 },
			});
		},
		from: {
			opacity: 1,
		},
	});

	if (!colorMode) return null;
	return (
		<button
			className="viewing-mode-button"
			id="toggle-viewing-mode"
			type="button"
			ref={themeButton}
			onClick={() => {
				if (colorMode === 'dark') setColorMode('light');
				else setColorMode('dark');
				if (themeButton && themeButton.current) themeButton.current.blur();
			}}
			title={colorMode && colorMode === 'dark' ? 'Toggle light theme' : 'Toggle dark theme'}
		>
			<div className={`theme-toggle ${colorMode && colorMode === 'dark' ? 'dark-theme' : 'light-theme'}`}>
				<animated.span className="mask"
					style={colorMode && colorMode === 'dark' ? toggleMoonAnimation : toggleSunAnimation} />
			</div>
		</button>
	);
};

export default ThemeToggle;
