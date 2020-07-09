import React, { useContext } from 'react';
import { useSpring } from 'react-spring';
import GradientLink from '../GradientLink/GradientLink';
import Logo from '../Intro/Logo';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Styled } from './Footer.styles';

const Footer = () => {
	const { colorMode } = useContext(ThemeContext);
	const [, setY] = useSpring(() => ({ y: 0 }));

	return (
		<Styled.Footer colorMode={colorMode}>
			<Styled.FooterContainer>
				<Styled.FooterLogo>
					<Styled.FooterLogoButton
						type="button"
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
					</Styled.FooterLogoButton>
				</Styled.FooterLogo>
				<Styled.FooterLinkContainer>
					<li>
						<GradientLink url="https://twitter.com/matthewgallo27"
							external
							bold>
							Twitter
						</GradientLink>
					</li>
					<li>
						<GradientLink url="https://www.linkedin.com/in/matthew-gallo-1090748a/"
							external
							bold>
							LinkedIn
						</GradientLink>
					</li>
					<li>
						<GradientLink url="https://github.com/matthewgallo/"
							external
							bold>
							Github
						</GradientLink>
					</li>
				</Styled.FooterLinkContainer>
				<Styled.Copyright colorMode={colorMode}>&copy; 2020 Matt Gallo</Styled.Copyright>
			</Styled.FooterContainer>
		</Styled.Footer>
	);
};

export default Footer;
