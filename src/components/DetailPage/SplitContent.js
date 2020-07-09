import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Styled } from './SplitContent.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const SplitContent = ({ children }) => {
	const { colorMode } = useContext(ThemeContext);
	return <Styled.SplitContentWrapper colorMode={colorMode}>{children}</Styled.SplitContentWrapper>;
};

SplitContent.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SplitContent;
