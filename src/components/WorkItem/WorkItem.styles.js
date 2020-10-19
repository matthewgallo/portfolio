import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLORS } from '../../theme';

const WorkItemImage = styled(motion.img)`
	display: block;
	height: 100%;
	max-height: 20rem;
	object-fit: cover;
	width: 100%;
	@media (min-width: 320px) {
		max-height: 20rem;
	}
	@media (min-width: 768px) {
		min-height: 250px;
		min-width: 500px;
	}
`;

const ProjectName = styled(motion.h5)`
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	font-weight: 700;
	padding-bottom: 1rem;
	margin-bottom: 2rem;
	position: relative;

	&:after {
		background: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
		border-radius: 1rem;
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		position: absolute;
		width: 60px;
	}
`;

const WorkItemContent = styled(motion.div)`
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.light : COLORS.text.light)};
	padding: 1rem;
	width: calc(100% - 2rem);
	@media (min-width: 768px) {
		padding-left: 2rem;
		width: 30%;
	}
`;

const WorkItemInner = styled.div`
	display: flex;
	position: relative;
	flex-direction: column-reverse;
	@media (min-width: 768px) {
		align-items: center;
		flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
	}
`;

const ViewProjectContainer = styled(motion.div)`
	position: relative;
	@media (min-width: 768px) {
		position: absolute;
		bottom: 0;
	}
`;

const ViewProjectLabel = styled.p`
	color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
	font-size: 0.875rem;
	opacity: 0;
	margin: 0;
	position: relative;
	transform: translateY(8px);
	transition: opacity 0.25s cubic-bezier(0.694, 0.048, 0.335, 1), transform 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
`;

const ViewProjectDivider = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
	height: 2px;
	transition: width 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
	width: 0px;
`;

const sharedLinkStyles = `
	display: block;
	height: 100%;
	text-decoration: none;
	transition: all 0.35s ease;
	width: 100%;
	&:hover ~ ${WorkItemContent},
	&:focus ~ ${WorkItemContent} {
		${ViewProjectLabel} {
			opacity: 1;
			transform: translateY(0px);
		}
		${ViewProjectDivider} {
			color: red;
			width: 100px;
		}
	}
	@media (min-width: 768px) {
		overflow: hidden;
		width: 70%;
	}
`;

const WorkItemLink = styled.a`
	${sharedLinkStyles}
`;
const WorkItemButton = styled.button`
	${sharedLinkStyles}
	display: flex;
	flex-direction: column-reverse;
	@media (min-width: 768px) {
		align-items: center;
		flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
		margin-bottom: 6rem;
		display: flex;
		flex-direction: row-reverse;
	}
`;
const WorkItemRouterLink = styled(motion.custom(Link))`
	${sharedLinkStyles}
`;

const WorkItem = styled.li`
	display: flex;
	max-height: 28rem;
	min-height: 20rem;
	position: relative;
	margin-bottom: 2rem;
	flex-direction: column-reverse;
	@media (min-width: 768px) {
		align-items: center;
		flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
		margin-bottom: 6rem;
	}
`;

export const Styled = {
	ProjectName,
	WorkItemImage,
	WorkItemContent,
	WorkItemLink,
	WorkItemButton,
	WorkItemRouterLink,
	WorkItem,
	ViewProjectLabel,
	ViewProjectDivider,
	ViewProjectContainer,
	WorkItemInner,
};
