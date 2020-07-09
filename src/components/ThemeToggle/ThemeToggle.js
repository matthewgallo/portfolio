import React, { useContext, useRef } from 'react';
import { useSpring } from 'react-spring';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Styled } from './ThemeToggle.styles';

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
				background: 'transparent',
				config: { duration: 1000 },
			});
		},
		from: {
			opacity: 1,
		},
	});

	if (!colorMode) return null;
	return (
		<Styled.ThemeToggleButton
			type="button"
			ref={themeButton}
			onClick={() => {
				if (colorMode === 'dark') setColorMode('light');
				else setColorMode('dark');
				if (themeButton && themeButton.current) themeButton.current.blur();
			}}
			title={colorMode && colorMode === 'dark' ? 'Toggle light theme' : 'Toggle dark theme'}
		>
			<Styled.ThemeToggle colorMode={colorMode}>
				<Styled.ThemeToggleMask style={colorMode && colorMode === 'dark' ? toggleMoonAnimation : toggleSunAnimation} />
			</Styled.ThemeToggle>
		</Styled.ThemeToggleButton>
	);
};

export default ThemeToggle;
