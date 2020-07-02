import React from 'react';
import { useSpring } from 'react-spring';
import { Parallax } from '@react-spring/parallax';
import DetailHeader from '../DetailPage/DetailHeader';
import JeopardyDetailsImage from '../../assets/images/jeopardy/mg_jeopardy_detail.svg';
import Tag from '../Tag/Tag';
import Text from '../Text/Text';
import SectionMaxWidth from '../SectionMaxWidth/SectionMaxWidth';
import reactlogo from '../../assets/images/blockchain/react.svg';
import sasslogo from '../../assets/images/blockchain/sass.svg';
import storeonlogo from '../../assets/images/jeopardy/storeonLogo.svg';
import nodejsLogo from '../../assets/images/jeopardy/nodejs.svg';
import vercelLogo from '../../assets/images/jeopardy/vercellogo.svg';
import GradientLink from '../GradientLink/GradientLink';

const JeopardyDetails = () => {
	const tagAnimation = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateX(0)',
				delay: 200,
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateX(-2rem)',
		},
	});
	const tagAnimation2 = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateX(0)',
				delay: 250,
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateX(-2rem)',
		},
	});

	return (
		<Parallax>
			<DetailHeader
				title={
					<GradientLink external
						url="https://jeopardy-game.vercel.app/">
						Jeopardy!
					</GradientLink>
				}
				subtitle={
					<>
						<span role="img"
							aria-label="Television emoji">
							📺
						</span>{' '}
						Test your trivia skills on an American classic!
					</>
				}
				tags={
					<>
						<Tag style={tagAnimation}>
							<span style={{ marginRight: '0.5rem' }}
								role="img"
								aria-label="Crane emoji for Front end development">
								🏗️
							</span>{' '}
							Front end development*
						</Tag>
						<Tag style={tagAnimation2}>
							<span style={{ marginRight: '0.5rem' }}
								role="img"
								aria-label="Party emoji for #forfun">
								🥳
							</span>{' '}
							#forfun
						</Tag>
					</>
				}
				headerImage={{
					src: JeopardyDetailsImage,
					alt: 'Jeopardy app screenshot',
				}}
			/>
			<div className="project--call-out">
				<SectionMaxWidth>
					<h4 className="project-call-out-header">
						Kick back, relax, and play some Jeopardy! Test your trivia skills out with this fun game and see how you do with Jeopardy shows dating back to
						&apos;84.
					</h4>
					<div className="project--overview">
						<div className="project-overview-item">
							<h5>Objective</h5>
							<Text>Score some Jeopardy! points</Text>
						</div>
						<div className="project-overview-item">
							<h5>Tools</h5>
							<Text>
								<span className="tool-item">
									<img src={reactlogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="React logo"
										aria-label="React logo" />
									React
								</span>
								<span className="tool-item">
									<span style={{ marginRight: '0.5rem' }}
										role="img"
										aria-label="Crane emoji for Front end development">
										🎣
									</span>
									React hooks
								</span>
								<span className="tool-item">
									<img src={sasslogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Sass logo"
										aria-label="Sass logo" />
									Sass
								</span>
								<span className="tool-item">
									<img src={storeonlogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Store.on logo"
										aria-label="Sass logo" />
									Store.on
								</span>
								<span className="tool-item">
									<img src={nodejsLogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Nodejs logo"
										aria-label="Sass logo" />
									Node.js
								</span>
								<span className="tool-item">
									<img src={vercelLogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Vercel logo"
										aria-label="Sass logo" />
									Vercel
								</span>
							</Text>
						</div>
						<div className="project-overview-item">
							<h5>Created</h5>
							<Text>May 2020</Text>
						</div>
					</div>
				</SectionMaxWidth>
			</div>
		</Parallax>
	);
};

export default JeopardyDetails;
