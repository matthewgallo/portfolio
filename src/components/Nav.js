import React, {Component} from 'react';
import NavLink from './NavLink';

//styles
import './nav.scss';

class Nav extends Component {
  render() {
    return (
			<nav className="site-navigation">
	      <div className="nav-content">
					<div className="nav-logo">
						<a href="#" className="nav-logo-link">
							<svg className="mg--logo-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 400">
								<defs>
									<linearGradient id="linear-gradient" x1="1.01" y1="199.88" x2="851.01" y2="201.88" gradientUnits="userSpaceOnUse">
										<stop offset="0" stopColor="#3c6df0"/>
										<stop offset="1" stopColor="#34bc6e"/>
									</linearGradient>
									<linearGradient id="linear-gradient-2" x1="1.01" y1="199.18" x2="851.01" y2="201.18" xlinkHref="#linear-gradient"/>
									<linearGradient id="linear-gradient-3" x1="1.36" y1="48.47" x2="851.36" y2="50.47" xlinkHref="#linear-gradient"/>
									<linearGradient id="linear-gradient-4" x1="0.66" y1="348.47" x2="850.66" y2="350.47" xlinkHref="#linear-gradient"/>
									<linearGradient id="linear-gradient-5" x1="1.24" y1="99.53" x2="851.24" y2="101.53" xlinkHref="#linear-gradient"/>
									<linearGradient id="linear-gradient-6" x1="0.78" y1="298.12" x2="850.78" y2="300.12" xlinkHref="#linear-gradient"/>
									<linearGradient id="linear-gradient-7" x1="1.01" y1="198.24" x2="851.01" y2="200.24" xlinkHref="#linear-gradient"/>
								</defs>
								<rect id="Rectangle" className="cls1" width="100" height="400"/>
								<rect id="Rectangle-Copy" className="cls2" x="300" width="100" height="400"/>
								<rect id="Rectangle-Copy-3" className="cls3" x="450" width="400" height="100"/>
								<rect id="Rectangle-Copy-4" className="cls4" x="450" y="300" width="400" height="100"/>
								<rect id="Rectangle-Copy-2" className="cls5" x="150" width="100" height="200"/>
								<rect id="Rectangle-Copy-6" className="cls6" x="750" y="200" width="100" height="200"/>
								<rect id="Rectangle-Copy-5" className="cls7" x="650" y="150" width="200" height="100"/>
							</svg>
						</a>
					</div>
					<ul className="nav-links">
						<NavLink
							url="#about"
							name="About"
						/>
						<NavLink
							url="#portfolio"
							name="Portfolio"
						/>
						<NavLink
							url="#contact"
							name="Contact"
						/>
					</ul>
	      </div>
			</nav>
    )
  }
}

export default Nav;
