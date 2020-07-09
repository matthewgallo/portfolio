import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './ContentSectionItem.styles';

const ContentSectionItem = ({ children, header, largeHeader }) => {
	return (
		<Styled.ContentSectionItem>
			{largeHeader ? <h4>{header}</h4> : <h5>{header}</h5>}
			{children}
		</Styled.ContentSectionItem>
	);
};

ContentSectionItem.defaultProps = {
	largeHeader: false,
};

ContentSectionItem.propTypes = {
	largeHeader: PropTypes.bool,
	header: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ContentSectionItem;
