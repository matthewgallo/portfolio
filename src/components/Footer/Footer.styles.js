import styled from 'styled-components';
import { COLORS } from '../../theme';

const Footer = styled.footer`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light)};
	padding: 8% 0;
	width: 100%;
`;

const FooterContainer = styled.div`
	display: block;
	margin: 0 auto;
	max-width: 1170px;
`;

const FooterLogo = styled.div`
	display: block;
	margin: 0 auto;
	position: relative;
	text-align: center;
`;

const FooterLogoButton = styled.button`
	background-color: transparent;
	border: 0;
	cursor: pointer;
	display: inline-block;
	margin: 0;
	padding: 0;
`;

const FooterLinkContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style: none;
	margin: 0;
	padding: 2rem 0;
	text-align: center;
	width: 100%;
`;

const Copyright = styled.span`
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	display: block;
	margin: 0 auto;
	text-align: center;
`;

export const Styled = {
	Footer,
	FooterContainer,
	FooterLogo,
	FooterLogoButton,
	FooterLinkContainer,
	Copyright,
};
