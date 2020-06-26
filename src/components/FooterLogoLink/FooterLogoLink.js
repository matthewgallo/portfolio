import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footerLogoLink.scss';

const FooterLogoLink = ({ backgroundColor }) => {
	return (
		<div
			className="footer--logo-link-container"
			style={{
				backgroundColor: backgroundColor === 'gray' ? '#f4f4f4' : '#fff',
			}}
		>
			<Link to="/"
className="nav-logo-link py--footer-link footer--logo-link">
				<svg className="mg--logo-nav py--footer-logo"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 850 400">
					<rect id="Rectangle"
className="cls1"
width="100"
height="400" />
					<rect id="Rectangle-Copy"
className="cls2"
x="300"
width="100"
height="400" />
					<rect id="Rectangle-Copy-3"
className="cls3"
x="450"
width="400"
height="100" />
					<rect id="Rectangle-Copy-4"
className="cls4"
x="450"
y="300"
width="400"
height="100" />
					<rect id="Rectangle-Copy-2"
className="cls5"
x="150"
width="100"
height="200" />
					<rect id="Rectangle-Copy-6"
className="cls6"
x="750"
y="200"
width="100"
height="200" />
					<rect id="Rectangle-Copy-5"
className="cls7"
x="650"
y="150"
width="200"
height="100" />
				</svg>
			</Link>
		</div>
	);
};

FooterLogoLink.propTypes = {
	backgroundColor: PropTypes.string.isRequired,
};

export default FooterLogoLink;
