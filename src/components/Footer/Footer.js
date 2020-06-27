import React, { Component } from 'react';
import Scroll from 'react-scroll';
import GradientLink from '../GradientLink/GradientLink';

const scroll = Scroll.animateScroll;
const { Link } = Scroll;

class Footer extends Component {
	scrollToTop = event => {
		event.preventDefault();
		scroll.scrollToTop();
	};

	render() {
		return (
			<footer>
				<div className="footer-container">
					<div className="footer-logo">
						<Link to="/"
							className="footer-logo-link"
							onClick={event => this.scrollToTop(event)}>
							<svg className="mg--logo-footer"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 850 400">
								<defs>
									<linearGradient id="linear-gradient"
										x1="1.01"
										y1="199.88"
										x2="851.01"
										y2="201.88"
										gradientUnits="userSpaceOnUse">
										<stop offset="0"
											stopColor="#3c6df0" />
										<stop offset="1"
											stopColor="#34bc6e" />
									</linearGradient>
									<linearGradient id="linear-gradient-2"
										x1="1.01"
										y1="199.18"
										x2="851.01"
										y2="201.18"
										xlinkHref="#linear-gradient" />
									<linearGradient id="linear-gradient-3"
										x1="1.36"
										y1="48.47"
										x2="851.36"
										y2="50.47"
										xlinkHref="#linear-gradient" />
									<linearGradient id="linear-gradient-4"
										x1="0.66"
										y1="348.47"
										x2="850.66"
										y2="350.47"
										xlinkHref="#linear-gradient" />
									<linearGradient id="linear-gradient-5"
										x1="1.24"
										y1="99.53"
										x2="851.24"
										y2="101.53"
										xlinkHref="#linear-gradient" />
									<linearGradient id="linear-gradient-6"
										x1="0.78"
										y1="298.12"
										x2="850.78"
										y2="300.12"
										xlinkHref="#linear-gradient" />
									<linearGradient id="linear-gradient-7"
										x1="1.01"
										y1="198.24"
										x2="851.01"
										y2="200.24"
										xlinkHref="#linear-gradient" />
								</defs>
								<rect id="Rectangle"
									className="cls1 mg--logo-m-1"
									width="100"
									height="400" />
								<rect id="Rectangle-Copy"
									className="cls2 mg--logo-m-3"
									x="300"
									width="100"
									height="400" />
								<rect id="Rectangle-Copy-3"
									className="cls3 mg--logo-g-1"
									x="450"
									width="400"
									height="100" />
								<rect id="Rectangle-Copy-4"
									className="cls4 mg--logo-g-4"
									x="450"
									y="300"
									width="400"
									height="100" />
								<rect id="Rectangle-Copy-2"
									className="cls5 mg--logo-m-2"
									x="150"
									width="100"
									height="200" />
								<rect id="Rectangle-Copy-6"
									className="cls6 mg--logo-g-3"
									x="750"
									y="200"
									width="100"
									height="200" />
								<rect id="Rectangle-Copy-5"
									className="cls7 mg--logo-g-2"
									x="650"
									y="150"
									width="200"
									height="100" />
							</svg>
						</Link>
					</div>
					<ul className="footer-link-container">
						<li className="footer-link-item">
							<GradientLink url="https://twitter.com/matthewgallo27"
								external
								color="#fff"
								bold>
								Twitter
							</GradientLink>
						</li>
						<li className="footer-link-item">
							<GradientLink url="https://www.linkedin.com/in/matthew-gallo-1090748a/"
								external
								color="#fff"
								bold>
								LinkedIn
							</GradientLink>
						</li>
						<li className="footer-link-item">
							<GradientLink url="https://github.com/matthewgallo/"
								external
								color="#fff"
								bold>
								Github
							</GradientLink>
						</li>
					</ul>
					<span className="copyright mg--caption">&copy; 2020 Matt Gallo</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
