import styled from 'styled-components';
import { COLORS } from '../../theme';

const ContentContainer = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
	padding: 4rem 0;
	padding-bottom: 6rem;
`;

export const Styled = {
	ContentContainer,
};
