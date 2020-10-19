import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../theme';

const DetailHeaderContainer = styled(motion.div)`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	overflow: hidden;
	padding-top: 3rem;

	width: 100vw;
	height: 100vh;
`;

const DetailHeaderContent = styled(motion.div)`
	align-items: flex-start;
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 0 auto;
	max-width: 90%;
	min-height: calc(100vh - 3rem);
	padding-top: 4rem;
	// position: relative;
	z-index: 2;
	@media (min-width: 768px) {
		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
		max-width: 1170px;
		padding: 0 2rem;
		padding-top: 0;
	}
	@media (min-width: 1220px) {
		max-width: 1170px;
	}
`;

const DetailHeaderImageContainer = styled(motion.div)`
	max-width: 840px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const HeaderText = styled(motion.div)`
	padding-top: 4rem;
`;

const DetailHeaderImage = styled(motion.img)`
	max-width: 100%;
	width: 100%;
`;

export const Styled = {
	DetailHeaderContainer,
	DetailHeaderContent,
	DetailHeaderImageContainer,
	DetailHeaderImage,
	HeaderText,
};
