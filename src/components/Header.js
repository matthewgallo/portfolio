import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavLink from './NavLink';
import './header.scss';

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

class Header extends Component {
	throttledFunc = throttled(() => {
		const indicatorElement = document.querySelector('#scrollbar-indicator');
		const windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
		const docHeight = this.getDocHeight();
		const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
		const trackLength = docHeight - windowHeight;
		const percentScrolled = scrollTop / (trackLength || 1); // gets percentage scrolled (ie: from 0 to 1 or NaN if tracklength == 0)
		indicatorElement.style.transform = `scaleY(${percentScrolled})`;
	}, 250);

	componentDidMount() {
		window.addEventListener('scroll', this.throttledFunc);
	}

	componentDidUpdate(prevProps) {
		const { location } = this.props;
		window.addEventListener('scroll', this.throttledFunc);
		if (prevProps.location.pathname !== location.pathname) {
			window.scrollTo(0, 0);
			const indicatorElement = document.querySelector('#scrollbar-indicator');
			indicatorElement.style.transform = `scaleY(0)`;
		}
	}

	getDocHeight = () => {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	render() {
		const { toggleNavOpen } = this.props;
		return (
			<header className="mg--header">
				<div className="nav-content">
					<div className="nav-logo">
						<NavLink name="matt gallo"
url="/" />
					</div>
					<ul className="nav-links desktop-nav-links">
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
	}
}

Header.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}).isRequired,
	toggleNavOpen: PropTypes.func.isRequired,
};

export default withRouter(Header);
