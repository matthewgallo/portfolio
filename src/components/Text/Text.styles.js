import styled from 'styled-components';

const ContentText = styled.p`
	font-size: ${props => (props.small ? '.875rem' : props.medium ? '1rem' : '.875rem')};
	line-height: 1.25;
	margin: 0;
	margin-bottom: ${props => (props.margin ? '1.5rem' : '0')};
	max-width: 790px;
`;

export const Styled = {
	ContentText,
};
