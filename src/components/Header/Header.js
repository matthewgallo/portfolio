import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GradientLink from '../GradientLink/GradientLink';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import useScroll from '../../hooks/useScroll';

function throttled(fn, delay) {
	let lastCall = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		// eslint-disable-next-line consistent-return
		return fn(...args);
	};
}

const Header = ({ toggleNavOpen }) => {
	const location = useLocation();
	const { scrollY } = useScroll();

	const getDocHeight = () => {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	const throttledFunc = throttled(() => {
		const indicatorElement = document.querySelector('#scrollbar-indicator');
		const windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
		const docHeight = getDocHeight();
		const trackLength = docHeight - windowHeight;
		const percentScrolled = scrollY / (trackLength || 1); // gets percentage scrolled (ie: from 0 to 1 or NaN if tracklength == 0)
		indicatorElement.style.transform = `scaleY(${percentScrolled})`;
	}, 250);

	useEffect(() => {
		throttledFunc();
	}, [scrollY, throttledFunc]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const indicatorElement = document.querySelector('#scrollbar-indicator');
		indicatorElement.style.transform = `scaleY(0)`;
	}, [location]);

	const { colorMode } = useContext(ThemeContext);
	return (
		<header className="mg--header">
			<div className="nav-content">
				<div className="nav-logo">
					<GradientLink bold
						url="/"
						color={colorMode && colorMode === 'dark' ? '#fff' : '#121619'}>
						matt gallo
					</GradientLink>
				</div>
				<ul className="nav-links desktop-nav-links">
					<ThemeToggle />
					<button className="new-nav-button"
						onClick={toggleNavOpen}
						type="button">
						<div className="navigation-line" />
						<div className="navigation-line" />
					</button>
				</ul>
			</div>
			<div className="scrollbar-container">
				<div id="scrollbar-indicator" />
			</div>
		</header>
	);
};

Header.defaultProps = {
	location: {},
};

Header.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
	toggleNavOpen: PropTypes.func.isRequired,
};

export default Header;
