import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Styled } from './ContentSection.styles';

const ContentSection = ({ children }) => {
	const { colorMode } = useContext(ThemeContext);
	return <Styled.ContentContainer colorMode={colorMode}>{children}</Styled.ContentContainer>;
};

ContentSection.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ContentSection;
