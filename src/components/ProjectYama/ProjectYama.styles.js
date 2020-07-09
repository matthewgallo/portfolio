import styled from 'styled-components';
import { COLORS } from '../../theme';

const SplitContentImg = styled.img`
	height: 100%;
	object-fit: contain;
	width: 100%;
	@media (min-width: 768px) {
		height: 100%;
		object-fit: contain;
		width: 50%;
		padding-right: ${props => (props.maxWidth ? '7.5%' : '0')};
	}
`;

const PasswordOverlay = styled.div`
	align-items: center;
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light)};
	bottom: 0;
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 1;
`;

const PasswordLockIcon = styled.svg`
	border: 2px solid ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	border-radius: 100%;
	display: block;
	height: 4rem;
	margin: 0 auto;
	margin-bottom: 1rem;
	width: 4rem;
	path {
		fill: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	}
`;

const PasswordHeader = styled.h4`
	text-align: center;
	text-transform: uppercase;
`;

const PasswordInputContainer = styled.div`
	position: relative;
	width: 280px;
`;

const PasswordInput = styled.input`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	border: 0;
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	height: 3rem;
	padding: 14px 42px 14px 15px;
	transition: padding-right 0.1s ease-in-out;
	width: 100%;
`;

const RevealButton = styled.button`
	background: none;
	border: 0;
	cursor: pointer;
	height: 3rem;
	padding: 0;
	position: absolute;
	right: 0;
	svg {
		height: inherit;
		padding-left: 0.25rem;
		padding-top: 0.5rem;
		width: 2.5rem;
		path {
			fill: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
		}
	}
`;

export const Styled = {
	SplitContentImg,
	PasswordOverlay,
	PasswordLockIcon,
	PasswordHeader,
	PasswordInputContainer,
	PasswordInput,
	RevealButton,
};
