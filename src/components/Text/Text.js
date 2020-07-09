import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './Text.styles';

const Text = ({ children, small, medium, margin }) => {
	return (
		<Styled.ContentText margin={margin}
			small={small}
			medium={medium}>
			{children}
		</Styled.ContentText>
	);
};

Text.defaultProps = {
	small: true,
	medium: false,
	margin: false,
};

Text.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	margin: PropTypes.bool,
};

export default Text;
