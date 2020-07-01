import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Intro/Logo';

const FooterLogoLink = () => {
	return (
		<div className="footer--logo-link-container">
			<Link to="/"
				className="nav-logo-link py--footer-link footer--logo-link">
				<Logo
					style={{
						height: '50px',
						transition: 'fill 0.8s ease',
						width: '88px',
					}}
				/>
			</Link>
		</div>
	);
};

export default FooterLogoLink;
