import styled from 'styled-components';

const SplitContentWrapper = styled.div`
	border-bottom: 1px solid var(--color-backgroundSecondary);
	display: block;
	margin-bottom: 4rem;
	padding-bottom: 2rem;
	@media (min-width: 768px) {
		display: flex;
	}
`;

const SplitContentItem = styled.div`
	flex-basis: 50%;
	padding-right: ${props => (props.maxWidth ? '7.5%' : '0')};
`;

export const Styled = {
	SplitContentWrapper,
	SplitContentItem,
};
