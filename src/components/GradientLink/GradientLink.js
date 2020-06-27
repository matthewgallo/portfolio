import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GradientLink = ({ children, external, url, block, paddingBottom, className, flex, color, bold }) => {
	let displayType = 'initial';
	displayType = block && 'block';
	displayType = flex && 'flex';
	return (
		<>
			{external ? (
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
			) : (
				<Link
					to={url}
					className={`gradient--link ${className}`}
					style={{
						display: displayType,
						paddingBottom: paddingBottom ? '.25rem' : null,
						color: color || null,
						fontWeight: bold ? '600' : null,
					}}
				>
					{children}
				</Link>
			)}
		</>
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
