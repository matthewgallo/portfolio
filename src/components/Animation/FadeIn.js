import { createElement, cloneElement, useState, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const FadeInBottom = ({ threshold = 0, element = 'div', once = false, children, ...rest }) => {
	const { inView, ref } = useIntersectionObserver({ threshold });
	const [onceAppeared, setOnceAppeared] = useState(false);

	useEffect(() => {
		if (once && inView && !onceAppeared) setOnceAppeared(true);
	}, [inView, once, onceAppeared]);

	const { opacity, y } = useSpring({
		// eslint-disable-next-line no-nested-ternary
		opacity: once && onceAppeared ? 1 : inView ? 1 : 0,
		// eslint-disable-next-line no-nested-ternary
		y: once && onceAppeared ? 0 : inView ? 0 : 35,
	});

	const animatedRef = useRef(
		createElement(
			animated(element),
			{
				...rest,
				style: {
					...rest.style,
					opacity,
					transform: y.interpolate(newY => `translate3d(0, ${newY}px, 0)`),
				},
				ref,
			},
			children
		)
	);

	return cloneElement(
		animatedRef.current,
		{
			...rest,
			style: {
				...rest.style,
				opacity,
				transform: y.interpolate(newY => `translate3d(0, ${newY}px, 0)`),
			},
			ref,
		},
		children
	);
};

export default FadeInBottom;
