import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import Text from '../Text/Text';
import './tag.scss';

const Tag = ({ children, style }) => {
	return (
		<animated.div className="mg--tag"
style={style}>
			{typeof children === 'string' ? <Text>{children}</Text> : children}
		</animated.div>
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
