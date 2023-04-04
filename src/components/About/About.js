import React from 'react';
import { Styled } from './About.styles';

const About = () => {
	return (
		<>
			<Styled.AboutContainer>
				<Styled.AboutContent>
					<h3 style={{ paddingBottom: '1rem' }}>Hello!</h3>
					<h3>I՚m Matt, a front end developer / designer.</h3>
					<p style={{ paddingTop: '1.5rem' }}>
						I currently work as a lead UX/front end engineer for Carbon for IBM Products, a design system used by software products at IBM. I enjoy learning new
						things, some of which currently include react hooks, redux, svg animations, and framer motion{' '}
						<span role="img"
							aria-label="Star emoji">
							💫
						</span>
						.
					</p>
				</Styled.AboutContent>
			</Styled.AboutContainer>
			<Styled.AboutPortrait id="portrait">
				<Styled.AboutPortraitImage />
				<Styled.AboutPortraitHoverContainer>
					<Styled.AboutPortraitHoverImage />
				</Styled.AboutPortraitHoverContainer>
			</Styled.AboutPortrait>
		</>
	);
};

export default About;
