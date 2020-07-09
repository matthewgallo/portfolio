import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../theme';

const waveAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}

	10% {
		transform: rotate(-10deg);
	}

	20% {
		transform: rotate(12deg);
	}

	30% {
		transform: rotate(-10deg);
	}

	40% {
		transform: rotate(9deg);
	}

	50% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(0deg);
	}
`;

const NavMain = styled(animated.nav)`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	height: 100vh;
	left: 0;
	position: fixed;
	width: 100%;
	z-index: 2000;
`;

const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 90%;
	padding: 0 2rem;
	@media (min-width: 768px) {
		max-width: 1170px;
		padding: 0 2rem;
	}
`;

const NavContentContainer = styled.div`
	padding-top: 1rem;
`;

const Wave = styled.span`
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
	animation-name: ${waveAnimation};
	bottom: 2rem;
	display: inline-block;
	font-size: 2rem;
	position: absolute;
	right: 2rem;
	transform-origin: 70% 70%;
`;

const NavCloseButton = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: 2rem;
	justify-content: center;
	margin: 0;
	margin-top: 0.75rem;
	padding: 0;
	transform: rotate(45deg);
	width: 2rem;

	&:focus {
		outline: 0;
	}
`;

const NavCloseIconPath = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	height: 1px;
	transform: rotate(0deg);
	transition: 0.25s ease-in-out;
	width: 1rem;

	&:first-of-type {
		transform: rotate(0deg);
	}

	&:nth-child(2) {
		margin-top: -1px;
		transform: rotate(90deg);
	}
`;

const NavPageLink = styled(NavLink)`
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	display: block;
	font-weight: 300;
	margin-bottom: 0.5rem;
	transition: font-weight 0.4s ease-in-out;

	&:hover,
	&:focus {
		font-weight: 600;
	}
`;

export const Styled = {
	NavMain,
	NavContent,
	NavContentContainer,
	NavCloseButton,
	NavCloseIconPath,
	NavPageLink,
	Wave,
};
