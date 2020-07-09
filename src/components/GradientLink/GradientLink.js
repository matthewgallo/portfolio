import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Styled } from './GradientLink.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const GradientLink = ({ children, external, url, block, paddingBottom, flex, color, bold }) => {
	let displayType = 'initial';
	displayType = block && 'block';
	displayType = flex && 'flex';
	const { colorMode } = useContext(ThemeContext);
	return (
		<>
			{external ? (
				<Styled.GradientLink
					colorMode={colorMode}
					href={url}
					target={external ? '_blank' : null}
					display={displayType}
					paddingBottom={paddingBottom}
					bold={bold}
					color={color}
				>
					{children}
				</Styled.GradientLink>
			) : (
				<Styled.GradientRouterLink colorMode={colorMode}
					to={url}
					display={displayType}
					paddingBottom={paddingBottom}
					bold={bold}
					color={color}>
					{children}
				</Styled.GradientRouterLink>
			)}
		</>
	);
};

GradientLink.defaultProps = {
	external: false,
	block: null,
	paddingBottom: false,
	flex: false,
	color: '',
	bold: false,
};

GradientLink.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
	external: PropTypes.bool,
	url: PropTypes.string.isRequired,
	block: PropTypes.bool,
	paddingBottom: PropTypes.bool,
	flex: PropTypes.bool,
	color: PropTypes.string,
	bold: PropTypes.bool,
};

export default GradientLink;
