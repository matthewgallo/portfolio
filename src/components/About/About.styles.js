import styled from 'styled-components';
import me from '../../assets/images/mg.jpg';

const AboutContainer = styled.div`
	align-items: flex-start;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	margin: 0 auto;
	max-width: 1140px;
	padding: 8rem 2rem;
	position: relative;
	width: 100%;
`;

const AboutContent = styled.div`
	flex: 0 1 auto;
	margin-bottom: 30px;
	position: relative;
	width: 100%;
	word-spacing: 0.2rem;
	@media (min-width: 1060px) {
		max-width: 560px;
	}
`;

const AboutPortrait = styled.div`
	display: none;
	@media (min-width: 1060px) {
		bottom: 0;
		display: block;
		height: 500px;
		margin: 0 auto;
		max-width: 324px;
		overflow: hidden;
		position: absolute;
		right: 0;
		width: 30%;
	}
`;

const sharedPortraitPositionStyles = `
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 5;
`;

const AboutPortraitImage = styled.div`
	background-image: url(${me});
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	${sharedPortraitPositionStyles}
`;

const AboutPortraitHoverContainer = styled.div`
	opacity: 0;
	transition: all 380ms cubic-bezier(0.16, 0.01, 0.77, 1);
	z-index: 10;
	${sharedPortraitPositionStyles}
	${AboutPortrait}:hover & {
		opacity: 0.5;
	}
`;

const AboutPortraitHoverImage = styled.div`
	${sharedPortraitPositionStyles}
	background-image: url(${me});
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	transition: opacity, transform 320ms cubic-bezier(0.16, 0.01, 0.77, 1);
	::after {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 5;

		background-color: #3c6df0;
		content: '';
		mix-blend-mode: color;
	}

	${AboutPortrait}:hover & {
		transform: translate(var(--translate-x), var(--translate-y));
	}
`;

export const Styled = {
	AboutContainer,
	AboutContent,
	AboutPortrait,
	AboutPortraitImage,
	AboutPortraitHoverContainer,
	AboutPortraitHoverImage,
};
