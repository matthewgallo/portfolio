import React from 'react';
import { useSpring } from 'react-spring';
import GradientLink from '../GradientLink/GradientLink';
import Logo from '../Intro/Logo';

const Footer = () => {
	const [, setY] = useSpring(() => ({ y: 0 }));

	return (
		<footer>
			<div className="footer-container">
				<div className="footer-logo">
					<button
						type="button"
						className="footer-logo-link"
						onClick={() => {
							setY({
								y: 0,
								reset: true,
								from: { y: window.scrollY },
								onChange: springValue => {
									window.scroll(0, springValue.y);
								},
							});
						}}
					>
						<Logo
							style={{
								height: '50px',
								transition: 'fill 0.8s ease',
								width: '88px',
							}}
						/>
					</button>
				</div>
				<ul className="footer-link-container">
					<li className="footer-link-item">
						<GradientLink url="https://twitter.com/matthewgallo27"
							external
							bold>
							Twitter
						</GradientLink>
					</li>
					<li className="footer-link-item">
						<GradientLink url="https://www.linkedin.com/in/matthew-gallo-1090748a/"
							external
							bold>
							LinkedIn
						</GradientLink>
					</li>
					<li className="footer-link-item">
						<GradientLink url="https://github.com/matthewgallo/"
							external
							bold>
							Github
						</GradientLink>
					</li>
				</ul>
				<span className="copyright mg--caption">&copy; 2020 Matt Gallo</span>
			</div>
		</footer>
	);
};

export default Footer;
