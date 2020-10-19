import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorkSection = styled.section`
	@media (max-width: 420px) {
		grid-template-columns: repeat(auto-fill, minmax(19.5rem, 1fr));
	}
`;

const WorkListGrid = styled(motion.ul)`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr;
	list-style-type: none;
	margin: 4rem auto;
	max-width: 840px;
	padding: 1rem;
	@media (min-width: 880px) {
		padding: 0;
	}
	@media (min-width: 670px) {
		grid-template-columns: 1fr;
	}
`;

export const Styled = {
	WorkSection,
	WorkListGrid,
};
