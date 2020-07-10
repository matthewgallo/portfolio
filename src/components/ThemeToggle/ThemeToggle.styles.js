import styled from 'styled-components';
import { animated } from 'react-spring';

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

const ThemeToggle = styled(animated.svg)`
	height: 1.5rem;
	width: 1.5rem;
`;

export const Styled = {
	ThemeToggleButton,
	ThemeToggle,
};
