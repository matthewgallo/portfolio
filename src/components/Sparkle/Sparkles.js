import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import useRandomInterval from './useRandomInterval';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const range = (start, end, step = 1) => {
	const output = [];
	let newEnd;
	let newStart;
	if (typeof end === 'undefined') {
		newEnd = start;
		newStart = 0;
	}
	for (let i = newStart; i < newEnd; i += step) {
		output.push(i);
	}
	return output;
};

const DEFAULT_COLOR = '#FFC700';
const generateSparkle = (color, minSize = 10, maxSize = 20) => {
	const sparkle = {
		id: String(random(10000, 99999)),
		createdAt: Date.now(),
		color,
		size: random(minSize, maxSize),
		style: {
			top: `${random(0, 100)}%`,
			left: `${random(0, 100)}%`,
		},
	};
	return sparkle;
};
const Sparkles = ({ color = DEFAULT_COLOR, children, minSize = 10, maxSize = 20, ...delegated }) => {
	const [sparkles, setSparkles] = React.useState(() => {
		return range(3).map(() => generateSparkle(color));
	});
	useRandomInterval(
		() => {
			const sparkle = generateSparkle(color, minSize, maxSize);
			const now = Date.now();
			const nextSparkles = sparkles.filter(sp => {
				const delta = now - sp.createdAt;
				return delta < 750;
			});
			nextSparkles.push(sparkle);
			setSparkles(nextSparkles);
		},
		50,
		450
	);
	return (
		<Wrapper {...delegated}>
			{sparkles.map(sparkle => (
				<Sparkle key={sparkle.id}
					color={sparkle.color}
					size={sparkle.size}
					style={sparkle.style} />
			))}
			<ChildWrapper>{children}</ChildWrapper>
		</Wrapper>
	);
};

Sparkles.defaultProps = {
	minSize: '15',
	maxSize: '15',
	color: DEFAULT_COLOR,
};

Sparkles.propTypes = {
	color: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	minSize: PropTypes.number,
	maxSize: PropTypes.number,
};

const Sparkle = ({ size, color, style }) => {
	const path =
		'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
	return (
		<SparkleWrapper style={style}>
			<SparkleSvg width={size}
				height={size}
				viewBox="0 0 68 68"
				fill="none">
				<path d={path}
					fill={color} />
			</SparkleSvg>
		</SparkleWrapper>
	);
};

Sparkle.defaultProps = {
	color: null,
};

Sparkle.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number.isRequired,
	style: PropTypes.shape({
		top: PropTypes.string.isRequired,
		left: PropTypes.string.isRequired,
	}).isRequired,
};

const comeInOut = keyframes`0% {
		transform: scale( 0 );
	}

	50% {
		transform: scale( 1 );
	}

	100% {
		transform: scale( 0 );
	}
`;
const spin = keyframes`0% {
		transform: rotate( 0deg );
	}

	100% {
		transform: rotate( 180deg );
	}
`;
const Wrapper = styled.span`
	display: inline-block;
	position: relative;
`;
const SparkleWrapper = styled.span`
	display: block;
	position: absolute;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${comeInOut} 700ms forwards;
	}
`;
const SparkleSvg = styled.svg`
	display: block;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${spin} 1000ms linear;
	}
`;
const ChildWrapper = styled.strong`
	font-weight: bold;
	position: relative;
	z-index: 1;
`;

export default Sparkles;
