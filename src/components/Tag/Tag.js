import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Styled } from './Tag.styles';

const Tag = ({ children, style }) => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<Styled.Tag style={style}
			colorMode={colorMode}>
			{typeof children === 'string' ? <Text>{children}</Text> : children}
		</Styled.Tag>
	);
};

Tag.defaultProps = {
	style: {},
};

Tag.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
	style: PropTypes.shape({
		opacity: PropTypes.object,
		transform: PropTypes.object,
	}),
};

export default Tag;
