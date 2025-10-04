import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const BoldText = styled.span`
	font-style: normal;
	font-weight: 700;
	display: block;
	font-size: ${({ size }) =>
		size === 'expressive-heading'
			? '5rem'
			: size === 'expressive-heading-02'
				? '4rem'
				: size === 'expressive-heading-03'
					? '3rem'
					: size === 'expressive-heading-04'
					? '2rem'
					: size === 'expressive-heading-05'
					? '.875rem'
					: '1rem'};
	line-height: 1;
	margin-bottom: ${({ margin }) => margin};
	color: ${({ secondary, colorMode }) => {
		if (secondary && colorMode === 'dark') {
			// return hsl(from `${COLORS.text.dark}` h s calc(l - 20%));
			return `${COLORS.text.dark}50`;
		}
		if (secondary && colorMode === 'light') {
			return `${COLORS.text.light}70`;
		}
		if (colorMode === 'dark') {
			return COLORS.text.dark;
		}
		return COLORS.text.light;
	}}
`;

const Bold = ({ children, size, margin = '0', secondary }) => {
	const { colorMode } = useContext(ThemeContext);
	return <BoldText
		colorMode={colorMode}
		secondary={secondary}
		margin={margin}
		size={size}>{children}</BoldText>;
};

Bold.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
};

export default Bold;
