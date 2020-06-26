import React from 'react';
import PropTypes from 'prop-types';

const SectionMaxWidth = ({ children }) => {
	return <div className="section--max-width-container">{children}</div>;
};

SectionMaxWidth.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SectionMaxWidth;
