import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../theme';

const linkStyling = `
	position: relative;
	text-decoration: none;
	transition: color 0.3s ease;
	width: fit-content;

	:focus, :hover {
		outline: 0;
		text-decoration: none;
	}

	::after, ::before {
		bottom: -0.125rem;
		content: '';
		height: 3px;
		left: auto;
		position: absolute;
		right: 0;
		width: 0;
		z-index: 2;
	}

	:hover::after, :hover::before, :focus::after, :focus::before {
		left: 0;
		width: 100%;
	}
`;

const GradientLink = styled.a`
	${linkStyling}
	color: ${props => (props.color ? props.color : props.$colorMode && props.$colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
	display: ${props => (props.display ? props.display : 'inline-block')};
	padding-bottom: ${props => (props.$paddingBottom ? props.$paddingBottom : '0')};
	font-weight: ${props => (props.$bold ? '600' : 'initial')};
	::before {
		background-color: ${props => (props.$colorMode && props.$colorMode === 'dark' ? COLORS.secondary.dark : COLORS.secondary.light)};
		transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
	}

	::after {
		background-color: ${props => (props.$colorMode && props.$colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
		transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
	}
`;

const GradientRouterLink = styled(Link)`
	${linkStyling}
	color: ${props => (props.color ? props.color : props.$colorMode && props.$colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
	display: ${props => (props.display ? props.display : 'inline-block')};
	padding-bottom: ${props => (props.$paddingBottom ? props.$paddingBottom : '0')};
	font-weight: ${props => (props.$bold ? '600' : 'initial')};
	::before {
		background-color: ${props => (props.$colorMode && props.$colorMode === 'dark' ? COLORS.secondary.dark : COLORS.secondary.light)};
		transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
	}

	::after {
		background-color: ${props => (props.$colorMode && props.$colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light)};
		transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
	}
`;

export const Styled = {
	GradientLink,
	GradientRouterLink,
};
