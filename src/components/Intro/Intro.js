import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Logo from './Logo';

const Intro = () => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<section className={`header-container ${colorMode && colorMode === 'dark' ? 'header-container-dark' : 'header-container-light'}`}>
			<div className="header-container-inner">
				<div className="header-content">
					<div className="header-logo-container">
						<Logo className="header-logo" />
					</div>
					<div className="header-name-container">
						<h2 className="mg--semibold">Matt Gallo</h2>
						<p className="mg--light-italic">Front end developer and designer*</p>
					</div>
				</div>
				<p className="mg--light-italic saxophone-part-time">
					*part time saxophonist{' '}
					<span role="img"
						aria-label="Saxophone emoji">
						🎷
					</span>
				</p>
			</div>
		</section>
	);
};

export default Intro;
