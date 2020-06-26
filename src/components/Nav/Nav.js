import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = ({ style, toggleNavOpen }) => (
	<animated.nav style={style}
className="nav-main">
		<div className="nav-content">
			<div className="nav-content-container">
				<h5>matt gallo</h5>
				<ul>
					<li>
						<NavLink to="/"
activeClassName="nav-active"
className="new-nav-link mg--delta"
onClick={() => toggleNavOpen()}>
							home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about-me"
activeClassName="nav-active"
className="new-nav-link mg--delta"
onClick={() => toggleNavOpen()}>
							about me
						</NavLink>
					</li>
				</ul>
				<span aria-label="Hand wave"
role="img"
className="wave">
					👋
				</span>
			</div>
			<button className="close-nav-button"
onClick={() => toggleNavOpen()}
type="button">
				<div className="navigation-line" />
				<div className="navigation-line" />
			</button>
		</div>
	</animated.nav>
);

Nav.defaultProps = {
	style: null,
	toggleNavOpen: null,
};

Nav.propTypes = {
	style: PropTypes.shape({
		opacity: PropTypes.object,
		transform: PropTypes.object,
	}),
	toggleNavOpen: PropTypes.func,
};

export default Nav;
