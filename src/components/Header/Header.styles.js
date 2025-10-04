import styled from 'styled-components';
import { COLORS } from '../../theme';

const Header = styled.header`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? `${COLORS.background.dark}20` : `${COLORS.background.light}20`)};
	backdrop-filter: blur(10px);
	border: 1px solid ${({ colorMode }) => (colorMode && colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light)};
	padding: 0.5rem 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1000;
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 90%;
	padding: 0;
	@media (min-width: 1220px) {
		max-width: 1170px;
	}
	@media (min-width: 768px) {
		margin: 0 auto;
	}
`;

const HeaderLogo = styled.div`
	align-items: center;
	display: flex;
	position: relative;
`;

const HeaderActions = styled.ul`
	align-items: center;
	display: flex;
	margin: 0;
	padding: 0;
	transition: opacity 0.35s ease 0.75s;
`;

const HeaderToggleNavButton = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: 2rem;
	justify-content: center;
	margin: 0;
	padding: 0;
	width: 2rem;
	z-index: 3000;
	:focus {
		outline: 0;
	}
`;

const HeaderNavMenuLine = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	height: 1px;
	transform: rotate(0deg);
	transition: 0.25s ease-in-out;
	width: 1rem;

	:first-of-type {
		margin-bottom: 0.25rem;
	}

	${HeaderToggleNavButton}:hover &,
	${HeaderToggleNavButton}:focus & {
		&:first-of-type {
			transform: translateX(0.25rem);
		}

		&:last-of-type {
			transform: translateX(-0.25rem);
		}
	}
`;

export const Styled = {
	Header,
	HeaderContent,
	HeaderLogo,
	HeaderActions,
	HeaderToggleNavButton,
	HeaderNavMenuLine,
};
