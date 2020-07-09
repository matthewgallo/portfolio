import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './SectionMaxWidth.styles';

const SectionMaxWidth = ({ children }) => {
	return <Styled.SectionMaxWidthContainer>{children}</Styled.SectionMaxWidthContainer>;
};

SectionMaxWidth.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SectionMaxWidth;
