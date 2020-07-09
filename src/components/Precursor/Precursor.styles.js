import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';
import { COLORS } from '../../theme';

const PrecursorContainer = styled(animated.div)`
	background: radial-gradient(ellipse farthest-corner at 0% 100%, rgba(104, 128, 138, 0.4) 10%, rgba(138, 114, 76, 0) 40%),
		linear-gradient(to bottom, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
		linear-gradient(
			135deg,
			${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)} 0%,
			${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.secondary.dark : COLORS.secondary.light)} 100%
		);
	height: 100vh;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 2001;
`;

const horizontalLine = keyframes`
	0% {
		opacity: 0;
		width: 0;
	}

	40% {
		opacity: 1;
	}

	90% {
		opacity: 1;
		width: 100%;
	}

	100% {
		width: 0%;
	}
`;

const verticalLine = keyframes`
	0% {
		height: 0;
		opacity: 0;
	}

	40% {
		opacity: 1;
	}

	90% {
		height: 100%;
		opacity: 1;
	}

	100% {
		height: 0%;
	}
`;

const fadeOut = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}

	100% {
		opacity: 0;
		transform: translateY(1rem);
	}
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
		transform: translateY(1rem);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const PrecursorLine = styled.div`
	transition: all 0.2s cubic-bezier(0.2, 0.2, 0.38, 0.9);
	height: ${props => (props.horizontal ? '.5rem' : '0')};
	width: ${props => (props.vertical ? '.5rem' : '0')};
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	left: ${props => (props.top || props.left ? '0' : 'initial')};
	position: absolute;
	right: ${props => (props.top || props.right || props.bottom ? '0' : 'initial')};
	top: ${props => (props.top || props.right ? '0' : 'initial')};
	bottom: ${props => (props.right || props.bottom || props.left ? '0' : 'initial')};
	animation: 4s ${props => (props.top || props.bottom ? horizontalLine : verticalLine)} forwards;
`;

const PrecursorCenterContainer = styled.div`
	align-items: center;
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	display: flex;
	height: 100vh;
	justify-content: center;
`;

const PrecursorPercent = styled.h2`
	align-items: center;
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	display: flex;
	height: 100vh;
	justify-content: center;
	animation: 1s ${props => (props.doneLoading ? fadeOut : '')} forwards;
`;

const PrecursorLogo = styled.img`
	max-width: 175px;
	opacity: 0;
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	animation: 1s ${fadeIn} forwards;
`;

export const Styled = {
	PrecursorContainer,
	PrecursorLine,
	PrecursorCenterContainer,
	PrecursorPercent,
	PrecursorLogo,
};
