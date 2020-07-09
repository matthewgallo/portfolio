import styled from 'styled-components';
import { COLORS } from '../../theme';
import patternLogoLight from '../../assets/images/mg--logo-pattern.svg';
import patternLogoDark from '../../assets/images/mg--logo-pattern-dark.svg';
import patternLogoLightLarge from '../../assets/images/mg--logo-large.svg';
import patternLogoDarkLarge from '../../assets/images/mg--logo-large-dark.svg';

const IntroContainer = styled.section`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	background-size: 100%;
	height: 100vh;
	position: relative;
	background-image: url(${props => (props.colorMode && props.colorMode === 'dark' ? patternLogoDark : patternLogoLight)});
	@media (min-width: 1056px) {
		background-image: url(${props => (props.colorMode && props.colorMode === 'dark' ? patternLogoDarkLarge : patternLogoLightLarge)});
	}
`;

const IntroInner = styled.div`
	align-items: center;
	display: flex;
	height: inherit;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 90%;
	position: relative;
	@media (min-width: 1220px) {
		max-width: 1170px;
	}
`;

const IntroContent = styled.div`
	display: block;
	width: 100%;
	@media (min-width: 450px) {
		width: 100%;
	}
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		width: 100%;
	}
`;

const IntroLogoContainer = styled.div`
	@media (min-width: 450px) {
		max-width: 350px;
	}
	@media (min-width: 768px) {
		margin: 0 auto;
		max-width: 475px;
	}
`;

const IntroPartTime = styled.div`
	bottom: 1rem;
	font-size: 0.75rem;
	font-style: italic;
	left: 1rem;
	position: absolute;
`;

export const Styled = {
	IntroContainer,
	IntroInner,
	IntroContent,
	IntroLogoContainer,
	IntroPartTime,
};
