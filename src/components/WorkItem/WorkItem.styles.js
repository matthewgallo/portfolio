import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../theme';

const WorkItemImage = styled.img`
	bottom: 0;
	display: block;
	height: 100%;
	max-height: 20rem;
	object-fit: cover;
	position: absolute;
	width: 100%;
	}
	@media (min-width: '320px') {
	.work-item--image {
		max-height: 20rem;
	}
`;

const WorkItemContent = styled.div`
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.light : COLORS.text.light)};
	padding: 1rem;
	width: calc(100% - 2rem);
	h4 {
		padding-bottom: 1rem;
		position: relative;

		&:after {
			background: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.light : COLORS.text.light)};
			border-radius: 1rem;
			bottom: 0;
			content: '';
			display: block;
			height: 4px;
			position: absolute;
			width: 60px;
		}
	}
`;

const sharedLinkStyles = `
	display: block;
	height: 100%;
	text-decoration: none;
	transition: all 0.35s ease;
`;

const WorkItemLink = styled.a`
	${sharedLinkStyles}
`;
const WorkItemButton = styled.button`
	${sharedLinkStyles}
`;
const WorkItemRouterLink = styled(Link)`
	${sharedLinkStyles}
`;

const WorkItem = styled.li`
	max-height: 28rem;
	min-height: 24rem;
	position: relative;
`;

export const Styled = {
	WorkItemImage,
	WorkItemContent,
	WorkItemLink,
	WorkItemButton,
	WorkItemRouterLink,
	WorkItem,
};
