import React from 'react';
import { useSpring } from 'react-spring';
import DetailHeader from '../DetailPage/DetailHeader';
import GradientLink from '../GradientLink/GradientLink';
import CovidStatDetailsImage from '../../assets/images/covidstat/covidstat_header_img.svg';
import Tag from '../Tag/Tag';
import vercelLogo from '../../assets/images/jeopardy/vercellogo.svg';
import reactlogo from '../../assets/images/blockchain/react.svg';
import sasslogo from '../../assets/images/blockchain/sass.svg';
import storeonlogo from '../../assets/images/jeopardy/storeonLogo.svg';
import SectionMaxWidth from '../SectionMaxWidth/SectionMaxWidth';
import Text from '../Text/Text';

const CovidStat = () => {
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
		<>
			<DetailHeader
				title={
					<GradientLink external
						url="http://covidstat.dev/">
						Covidstat.dev
					</GradientLink>
				}
				subtitle="Easily search and view Covid-19 data across countries at a glance"
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
								aria-label="Tools emoji and palette emoji for UX/visual design">
								🛠️ 🎨
							</span>{' '}
							UX/Visual design
						</Tag>
					</>
				}
				headerImage={{
					src: CovidStatDetailsImage,
					alt: 'Jeopardy app screenshot',
				}}
			/>
			<div className="project--call-out">
				<SectionMaxWidth>
					<h4 className="project-call-out-header">
						An app that I built to provide users with an easier way to access Covid-19 data across countries with the option to view by a single country or to
						compare the data of up to 3 country&apos;s together.
					</h4>
					<div className="project--overview">
						<div className="project-overview-item">
							<h5>Objective</h5>
							<Text>Give users a quick view of Covid-19 data and easier access to download the datasets. Data provided by John Hopkins University.</Text>
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
									<img src={storeonlogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Redux logo"
										aria-label="Redux logo" />
									Store.on
								</span>
								<span className="tool-item">
									<img src={sasslogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Sass logo"
										aria-label="Sass logo" />
									Saas
								</span>
								<span className="tool-item">
									<img src={vercelLogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Sass logo"
										aria-label="Sass logo" />
									Vercel
								</span>
							</Text>
						</div>
						<div className="project-overview-item">
							<h5>Created</h5>
							<Text>April 2020</Text>
						</div>
					</div>
				</SectionMaxWidth>
			</div>
		</>
	);
};

export default CovidStat;
