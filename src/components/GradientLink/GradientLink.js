import React from 'react';
import PropTypes from 'prop-types';
import './gradientLink.scss';

const GradientLink = ({ children, external, url, block, paddingBottom, className, flex, color, bold }) => {
	let displayType = 'initial';
	displayType = block && 'block';
	displayType = flex && 'flex';
	return (
		<a
			href={url}
			className={`gradient--link ${className}`}
			target={external ? '_blank' : null}
			style={{
				display: displayType,
				paddingBottom: paddingBottom ? '.25rem' : null,
				color: color || null,
				fontWeight: bold ? '600' : null,
			}}
		>
			{children}
		</a>
	);
};

GradientLink.defaultProps = {
	external: false,
	block: null,
	paddingBottom: false,
	className: '',
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
	className: PropTypes.string,
	flex: PropTypes.bool,
	color: PropTypes.string,
	bold: PropTypes.bool,
};

export default GradientLink;
