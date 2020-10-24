import React, { useEffect } from 'react';
import { Styled } from './About.styles';

const About = () => {
	const moveImage = () => {
		const root = document.getElementById('portrait');
		const rect = root.getBoundingClientRect();
		const mouseMonitor = e => {
			const leftOfMiddle = e.clientX < rect.left + rect.width / 2;
			const aboveMiddle = e.clientY < rect.bottom - rect.height / 2;

			const moveX = leftOfMiddle ? '-10px' : '10px';
			const moveY = aboveMiddle ? '-5px' : '5px';

			root.style.setProperty('--translate-x', moveX);
			root.style.setProperty('--translate-y', moveY);
		};

		root.addEventListener('mousemove', mouseMonitor);
	};

	useEffect(() => {
		moveImage();
	}, []);

	return (
		<>
			<Styled.AboutContainer>
				<Styled.AboutContent>
					<h3 style={{ paddingBottom: '1rem' }}>Hello!</h3>
					<h3>I՚m Matt, a front end developer / designer.</h3>
					<p style={{ paddingTop: '1.5rem' }}>
						I currently work for the IBM Blockchain Platform as the front end development practice lead, working to bridge the gap between design and
						engineering. I enjoy learning new things, some of which currently include react hooks, redux, svg animations, and framer motion{' '}
						<span role="img"
							aria-label="Star emoji">
							💫
						</span>
						.
					</p>
					<p style={{ paddingTop: '1.5rem' }}>
						In my free time, I play my saxophone{' '}
						<span aria-label="Saxophone"
							role="img">
							🎷
						</span>
						and my fender rhodes{' '}
						<span aria-label="Fender Rhodes piano"
							role="img">
							🎹
						</span>
						, play with Petey{' '}
						<span aria-label="Dog, Petey"
							role="img">
							🐶
						</span>
						, and enjoy life with Rach{' '}
						<span aria-label="Heart"
							role="img">
							❤️
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
