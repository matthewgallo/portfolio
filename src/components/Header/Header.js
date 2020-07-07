import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import GradientLink from '../GradientLink/GradientLink';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import ScrollProgress from '../ScrollProgress/ScrollProgress';

const Header = ({ toggleNavOpen }) => {
	const { colorMode } = useContext(ThemeContext);
	const location = useLocation();
	console.log(location);
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
			{location && location.pathname !== '/' && <ScrollProgress />}
		</header>
	);
};

Header.propTypes = {
	toggleNavOpen: PropTypes.func.isRequired,
};

export default Header;
