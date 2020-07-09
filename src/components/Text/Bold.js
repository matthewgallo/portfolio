import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoldText = styled.span`
	font-style: normal;
	font-weight: 700;
`;

const Bold = ({ children }) => {
	return <BoldText>{children}</BoldText>;
};

Bold.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
};

export default Bold;
