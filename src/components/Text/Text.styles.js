import styled from 'styled-components';

const ContentText = styled.p`
	font-size: ${props => (props.small ? '.875rem' : props.medium ? '1rem' : '1.25rem')};
	line-height: 1.25;
	margin: 0;
	margin-bottom: ${({ margin }) => typeof margin === 'boolean' ? '1.5rem' : typeof margin === 'string' ? margin : 0};
	max-width: ${({ contained }) => contained ? 'min(100%, 420px)' : '790px'};
`;

export const Styled = {
	ContentText,
};
