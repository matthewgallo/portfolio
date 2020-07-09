import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Styled } from './Precursor.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import mgLogoLight from '../../assets/images/mg--logo-solid-white.svg';
import mgLogoDark from '../../assets/images/mg--logo-solid.svg';

const Precursor = ({ precursorOpen, closePrecursor, precursorStyles }) => {
	const [count, setCount] = useState(0);
	const [doneLoading, setDoneLoading] = useState(false);
	const [percentDoneAnimating, setPercentDoneAnimating] = useState(false);
	const totalPercent = `${count}%`;
	const precursorElement = document.querySelector('#precursor');
	const { body } = document;
	const { colorMode } = useContext(ThemeContext);
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
		<Styled.PrecursorContainer colorMode={colorMode}
			style={precursorStyles}
			id="precursor">
			{incrementLoadingPercentage()}
			<Styled.PrecursorLine horizontal
				top
				colorMode={colorMode} />
			<Styled.PrecursorLine vertical
				right
				colorMode={colorMode} />
			<Styled.PrecursorLine horizontal
				bottom
				colorMode={colorMode} />
			<Styled.PrecursorLine vertical
				left
				colorMode={colorMode} />
			<Styled.PrecursorCenterContainer>
				{!percentDoneAnimating && (
					<Styled.PrecursorPercent colorMode={colorMode}
						doneLoading={doneLoading}>
						{totalPercent}
					</Styled.PrecursorPercent>
				)}
				{percentDoneAnimating && <Styled.PrecursorLogo src={colorMode && colorMode === 'dark' ? mgLogoDark : mgLogoLight}
					alt="MG logo" />}
			</Styled.PrecursorCenterContainer>
		</Styled.PrecursorContainer>
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
