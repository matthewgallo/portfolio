import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import SectionMaxWidth from '../SectionMaxWidth/SectionMaxWidth';
import { Styled } from './DetailCallout.styles';

const DetailCallout = ({ children, header }) => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<Styled.DetailCallout colorMode={colorMode}>
			<SectionMaxWidth>
				<Styled.DetailCalloutHeader>{header}</Styled.DetailCalloutHeader>
				<Styled.DetailCalloutOverview>{children}</Styled.DetailCalloutOverview>
			</SectionMaxWidth>
		</Styled.DetailCallout>
	);
};

DetailCallout.propTypes = {
	header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
};

export default DetailCallout;
