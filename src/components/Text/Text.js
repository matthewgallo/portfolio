import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';

const Text = ({ children, small, medium, margin }) => {
	let fontSize = '.875rem';
	fontSize = small && '.875rem';
	fontSize = medium && '1rem';
	return (
		<p
			className="content-text"
			style={{
				fontSize,
				marginBottom: margin ? '1.5rem' : '0',
			}}
		>
			{children}
		</p>
	);
};

Text.defaultProps = {
	small: true,
	medium: false,
	margin: false,
};

Text.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	margin: PropTypes.bool,
};

export default Text;
