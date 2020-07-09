import styled from 'styled-components';
import { animated } from 'react-spring';
import { COLORS } from '../../theme';

const ThemeToggleButton = styled.button`
	background-color: transparent;
	border: 0;
	border-collapse: separate;
	cursor: pointer;
	margin: 0;
	min-height: 2rem;
	min-width: 2rem;
	outline: 0;
	padding: 0;
	position: relative;
	transition: 300ms transform;
`;

const ThemeToggle = styled.div`
	background: ${props =>
		props.colorMode && props.colorMode === 'dark'
			? 'linear-gradient(to right, #fa709a 0%, #fee140 100%);'
			: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'}
	border-radius: 100%;
	height: 2rem;
	position: relative;
	transition: background 300ms ease;
	width: 2rem;
	z-index: 1;
	::before {
		border-radius: 100%;
		content: '';
		height: 100%;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		transition: opacity 0.4s;
		width: 100%;
		z-index: -1;
	}
`;

const ThemeToggleMask = styled(animated.span)`
	background: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light)};
	border-radius: 100%;
	height: 100%;
	position: absolute;
	transition: transform 500ms ease, top 500ms ease, right 500ms ease;
	width: 100%;
`;

export const Styled = {
	ThemeToggleButton,
	ThemeToggle,
	ThemeToggleMask,
};
