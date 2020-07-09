import React from 'react';
import { useSpring } from 'react-spring';
import DetailHeader from '../DetailPage/DetailHeader';
import JeopardyDetailsImage from '../../assets/images/jeopardy/mg_jeopardy_detail.svg';
import Tag from '../Tag/Tag';
import CalloutGroup from '../DetailPage/DetailCalloutGroup';
import CalloutGroupItem from '../DetailPage/CalloutGroupItem';
import DetailCallout from '../DetailPage/DetailCallout';
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
		<div>
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
			<DetailCallout
				header={
					<>
						Kick back, relax, and play some Jeopardy! Test your trivia skills out with this fun game and see how you do with Jeopardy shows dating back to
						&apos;84.
					</>
				}
			>
				<CalloutGroup header="Objective">
					<CalloutGroupItem text="Score some Jeopardy! points" />
				</CalloutGroup>
				<CalloutGroup header="Tools">
					<CalloutGroupItem text="React"
						imgSrc={reactlogo}
						imgAlt="React logo" />
					<CalloutGroupItem text="React hooks"
						emoji="🎣"
						imgAlt="Crane emoji for Front end development" />
					<CalloutGroupItem text="Sass"
						imgSrc={sasslogo}
						imgAlt="Sass logo" />
					<CalloutGroupItem text="Store.on"
						imgSrc={storeonlogo}
						imgAlt="Store.on logo" />
					<CalloutGroupItem text="Node.js"
						imgSrc={nodejsLogo}
						imgAlt="Node.js logo" />
					<CalloutGroupItem text="Vercel"
						imgSrc={vercelLogo}
						imgAlt="Vercel logo" />
				</CalloutGroup>
				<CalloutGroup header="Created">
					<CalloutGroupItem text="May 2020" />
				</CalloutGroup>
			</DetailCallout>
		</div>
	);
};

export default JeopardyDetails;
