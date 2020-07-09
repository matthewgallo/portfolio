import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { COLORS } from '../../theme';

const ScrollbarContainer = styled.div`
	left: 0;
	position: fixed;
	right: 0;
	top: 3rem;
	height: 4px;
	z-index: 2000;
`;

const ScrollbarIndicator = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
	height: 4px;
	width: 0%;
`;

const ScrollProgress = () => {
	const { colorMode } = useContext(ThemeContext);
	const [percentScrolled, setPercentScrolled] = useState(0);

	const getDocHeight = () => {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	useEffect(() => {
		const throttledScrollFunc = () => {
			const indicatorElement = document.querySelector('#scrollbar-indicator');
			const windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
			const docHeight = getDocHeight();
			const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
			const trackLength = docHeight - windowHeight;
			setPercentScrolled((scrollTop / (trackLength || 1)) * 100); // gets percentage scrolled (ie: from 0 to 1 or NaN if tracklength == 0)
			indicatorElement.style.width = `${percentScrolled}%`;
		};
		window.addEventListener('scroll', throttledScrollFunc);
		return () => window.removeEventListener('scroll', throttledScrollFunc);
	}, [percentScrolled]);
	return (
		<ScrollbarContainer>
			<ScrollbarIndicator id="scrollbar-indicator"
				colorMode={colorMode} />
		</ScrollbarContainer>
	);
};

export default ScrollProgress;
