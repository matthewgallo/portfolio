import styled from 'styled-components';
import { COLORS } from '../../theme';

const DetailHeaderContainer = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	overflow: hidden;
	padding-top: 3.5rem;
`;

const DetailHeaderContent = styled.div`
	align-items: flex-start;
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 0 auto;
	max-width: 90%;
	min-height: calc(100vh - 3rem);
	padding-top: 4rem;
	position: relative;
	z-index: 2;
	@media (min-width: 768px) {
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		max-width: 1170px;
		padding: 0 2rem;
		padding-top: 0;
	}
	@media (min-width: 1220px) {
		max-width: 1170px;
	}
`;

const DetailHeaderTagGroup = styled.div`
	@media (min-width: 768px) {
		bottom: 1rem;
		position: absolute;
	}
`;

const DetailHeaderImageContainer = styled.div`
	max-width: 500px;
	position: relative;
	top: 6rem;
	width: 100%;
	@media (min-width: 768px) {
		position: relative;
		top: 0;
	}
`;

const DetailHeaderImage = styled.img`
	max-width: 100%;
`;

export const Styled = {
	DetailHeaderContainer,
	DetailHeaderContent,
	DetailHeaderTagGroup,
	DetailHeaderImageContainer,
	DetailHeaderImage,
};
