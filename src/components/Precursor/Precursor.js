import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import mgLogoLight from '../../assets/images/mg--logo-solid-white.svg';
import './precursor.scss';

const Precursor = ({ precursorOpen, closePrecursor, precursorStyles }) => {
	const [count, setCount] = useState(0);
	const [doneLoading, setDoneLoading] = useState(false);
	const [percentDoneAnimating, setPercentDoneAnimating] = useState(false);
	const totalPercent = `${count}%`;
	const precursorElement = document.querySelector('#precursor');
	const { body } = document;
	if (precursorOpen) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}

	const incrementLoadingPercentage = () => {
		setTimeout(() => {
			if (count < 100) {
				setCount(count + 1);
			}
		}, 18);
		if (count === 100) {
			setTimeout(() => {
				setDoneLoading(true);
			}, 1000);
			setTimeout(() => {
				setPercentDoneAnimating(true);
			}, 2000);
		}
		if (percentDoneAnimating) {
			setTimeout(() => {
				closePrecursor();
			}, 2000);
			setTimeout(() => {
				// eslint-disable-next-line no-unused-expressions
				precursorElement && precursorElement.remove();
			}, 3000);
		}
	};

	return (
		<animated.div className="intro-animated-container"
style={precursorStyles}
id="precursor">
			{incrementLoadingPercentage()}
			<div className="intro--line horizontal top" />
			<div className="intro--line vertical right" />
			<div className="intro--line horizontal bottom" />
			<div className="intro--line vertical left" />
			<div className="intro--center-container">
				{!percentDoneAnimating && <h2 className={`${doneLoading ? 'intro-percent-fade-out' : ''} intro-percent-number`}>{totalPercent}</h2>}
				{percentDoneAnimating && <img src={mgLogoLight}
className="intro-loading-logo"
alt="MG logo" />}
			</div>
		</animated.div>
	);
};

Precursor.propTypes = {
	precursorOpen: PropTypes.bool.isRequired,
	closePrecursor: PropTypes.func.isRequired,
	precursorStyles: PropTypes.shape({
		opacity: PropTypes.object,
		zIndex: PropTypes.object,
	}).isRequired,
};

export default Precursor;
