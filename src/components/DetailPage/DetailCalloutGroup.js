import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './DetailCalloutGroup.styles';

const CalloutGroup = ({ children, header }) => {
	return (
		<Styled.CalloutGroup>
			<h5>{header}</h5>
			<div>{children}</div>
		</Styled.CalloutGroup>
	);
};

CalloutGroup.defaultProps = {
	header: null,
};

CalloutGroup.propTypes = {
	header: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
};

export default CalloutGroup;
