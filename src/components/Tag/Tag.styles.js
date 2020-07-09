import styled from 'styled-components';
import { animated } from 'react-spring';
import { COLORS } from '../../theme';

const Tag = styled(animated.div)`
	align-items: center;
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
	border-radius: 1rem;
	color: $text;
	display: flex;
	height: 2rem;
	margin-bottom: 0.5rem;
	padding: 0 1rem;
	width: fit-content;
`;

export const Styled = {
	Tag,
};
