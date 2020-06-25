import React from 'react';
import Text from '../Text/Text';
import { animated } from 'react-spring';
import './tag.scss';

const Tag = ({ children, style }) => {
	return (
		<animated.div className="mg--tag" style={style}>
			{typeof children === 'string'
				? <Text>{children}</Text>
				: children
			}
		</animated.div>
	);
};

export default Tag;