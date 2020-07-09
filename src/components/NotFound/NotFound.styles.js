import styled from 'styled-components';
import { COLORS } from '../../theme';

const NotFoundContainer = styled.section`
	position: absolute;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
`;

export const Styled = {
	NotFoundContainer,
};
