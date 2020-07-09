import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Sparkles from '../Sparkle/Sparkles';
import { Styled } from './DetailHeader.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const DetailHeader = ({ title, subtitle, tags, headerImage }) => {
	const { colorMode } = useContext(ThemeContext);
	const titleAnimation = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateY(0)',
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateY(4rem)',
		},
	});

	const projectImageAnimation = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateX(0)',
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateX(2rem)',
		},
	});

	return (
		<Styled.DetailHeaderContainer colorMode={colorMode}>
			<Styled.DetailHeaderContent colorMode={colorMode}>
				<animated.div style={titleAnimation}>
					<h4>{title}</h4>
					<p>{subtitle}</p>
				</animated.div>
				<Styled.DetailHeaderTagGroup>{tags}</Styled.DetailHeaderTagGroup>
				<Styled.DetailHeaderImageContainer>
					<animated.div style={projectImageAnimation}>
						<Sparkles maxSize={50}
							minSize={15}>
							<Styled.DetailHeaderImage src={headerImage.src}
								alt={headerImage.alt} />
						</Sparkles>
					</animated.div>
				</Styled.DetailHeaderImageContainer>
			</Styled.DetailHeaderContent>
		</Styled.DetailHeaderContainer>
	);
};

DetailHeader.propTypes = {
	title: PropTypes.node.isRequired,
	subtitle: PropTypes.node.isRequired,
	tags: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	headerImage: PropTypes.shape({
		src: PropTypes.node.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
};

export default DetailHeader;
