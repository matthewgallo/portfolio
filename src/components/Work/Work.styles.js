import styled from 'styled-components';

const WorkSection = styled.section`
	@media (max-width: 420px) {
		grid-template-columns: repeat(auto-fill, minmax(19.5rem, 1fr));
	}
`;

const WorkListGrid = styled.ul`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr;
	list-style-type: none;
	margin: 4rem auto;
	max-width: 1200px;
	padding: 0;
	@media (min-width: 670px) {
		grid-template-columns: 2fr 2fr;
	}
`;

export const Styled = {
	WorkSection,
	WorkListGrid,
};
