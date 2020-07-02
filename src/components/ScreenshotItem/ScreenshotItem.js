import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FadeIn from '../Animation/FadeIn';

const ScreenshotContainer = styled.div`
	display: block;
	margin-bottom: 2rem;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

const Screenshot = styled.img`
	max-width: 660px;
	width: 100%;
`;

const Subtitle = styled.small`
	opacity: 0.65;
	font-size: 0.75rem;
`;

const Title = styled.h5`
	margin-bottom: 0;
`;

const ScreenshotItem = ({ title, subtitle, src }) => {
	return (
		<ScreenshotContainer>
			<div>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</div>
			<FadeIn>
				<div style={{ display: 'flex' }}>
					<Screenshot src={src}
						alt={title} />
				</div>
			</FadeIn>
		</ScreenshotContainer>
	);
};

ScreenshotItem.propTypes = {
	src: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default ScreenshotItem;
