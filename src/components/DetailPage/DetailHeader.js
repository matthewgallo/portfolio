import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';
import Sparkles from '../Sparkle/Sparkles';

const DetailHeader = ({ title, subtitle, tags, headerImage }) => {
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
		<div className="project--details-container">
			<div className="project--details-header">
				<animated.div className="project--header-content"
					style={titleAnimation}>
					<h4>{title}</h4>
					<p>{subtitle}</p>
				</animated.div>
				<div className="project-tag-group">{tags}</div>
				<div className="project--header-image-container">
					<ParallaxLayer offset={0}
						speed={0.25}>
						<animated.div style={projectImageAnimation}>
							<Sparkles maxSize={50}
								minSize={15}>
								<img src={headerImage.src}
									alt={headerImage.alt}
									className="project--header-image" />
							</Sparkles>
						</animated.div>
					</ParallaxLayer>
				</div>
			</div>
		</div>
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
