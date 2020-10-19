import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Styled } from './DetailHeader.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { ImageContext } from '../../contexts/imageContext';

const transition = {
	duration: 0.8,
	ease: [0.77, 0.03, 0.21, 0.95],
	delay: 0.75,
};

const DetailHeader = ({ title, subtitle, headerImage }) => {
	const { imageProps } = useContext(ImageContext);
	const { colorMode } = useContext(ThemeContext);

	return (
		<Styled.DetailHeaderContainer colorMode={colorMode}
			initial="initial"
			animate="animate"
			exit="exit">
			<Styled.DetailHeaderContent colorMode={colorMode}
				exit="exit"
				initial="initial">
				<Styled.HeaderText
					colorMode={colorMode}
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ ...transition, duration: 0.5, delay: 1 }}
					exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
				>
					<h4>{title}</h4>
					<p>{subtitle}</p>
				</Styled.HeaderText>
				<Styled.DetailHeaderImageContainer
					style={{
						overflow: 'hidden',
						willChange: 'transform, width, height',
					}}
					initial={{
						width: imageProps.w,
						height: imageProps.h,
						x: imageProps.x,
						y: imageProps.y,
						zIndex: 1000,
					}}
					animate={{
						width: '100%',
						height: '60%',
						x: '-50%',
						y: '-50%',
						zIndex: 'auto',
						top: '65%',
						left: '50%',
					}}
					transition={transition}
					exit={{
						y: '-100%',
						opacity: 0,
						transition: {
							duration: 0.6,
						},
					}}
				>
					<Styled.DetailHeaderImage
						src={headerImage.src}
						alt={headerImage.alt}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Styled.DetailHeaderImageContainer>
			</Styled.DetailHeaderContent>
		</Styled.DetailHeaderContainer>
	);
};

DetailHeader.propTypes = {
	title: PropTypes.node.isRequired,
	subtitle: PropTypes.node.isRequired,
	headerImage: PropTypes.shape({
		src: PropTypes.node.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
};

export default DetailHeader;
