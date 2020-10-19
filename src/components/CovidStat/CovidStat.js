import React from 'react';
import DetailHeader from '../DetailPage/DetailHeader';
import GradientLink from '../GradientLink/GradientLink';
import CovidStatDetailsImage from '../../assets/images/covidstat/home_covid_header.png';
import Tag from '../Tag/Tag';
import vercelLogo from '../../assets/images/jeopardy/vercellogo.svg';
import reactlogo from '../../assets/images/blockchain/react.svg';
import sasslogo from '../../assets/images/blockchain/sass.svg';
import storeonlogo from '../../assets/images/jeopardy/storeonLogo.svg';
import CalloutGroup from '../DetailPage/DetailCalloutGroup';
import CalloutGroupItem from '../DetailPage/CalloutGroupItem';
import DetailCallout from '../DetailPage/DetailCallout';

const CovidStat = () => {
	return (
		<div>
			<DetailHeader
				title={
					<GradientLink external
						url="http://covidstat.dev/">
						Covidstat.dev
					</GradientLink>
				}
				subtitle="Easily search and view Covid-19 data across countries at a glance"
				headerImage={{
					src: CovidStatDetailsImage,
					alt: 'Jeopardy app screenshot',
				}}
			/>
			<DetailCallout
				header={
					<>
						An app that I built to provide users with an easier way to access Covid-19 data across countries with the option to view by a single country or to
						compare the data of up to 3 country&apos;s together.
					</>
				}
			>
				<CalloutGroup header="Objective">
					<CalloutGroupItem text="Give users a quick view of Covid-19 data and easier access to download the datasets. Data provided by John Hopkins University." />
				</CalloutGroup>
				<CalloutGroup header="Tools">
					<CalloutGroupItem text="React"
						imgSrc={reactlogo}
						imgAlt="React logo" />
					<CalloutGroupItem text="React hooks"
						emoji="🎣"
						imgAlt="Crane emoji for Front end development" />
					<CalloutGroupItem text="Store.on"
						imgSrc={storeonlogo}
						imgAlt="Store.on logo" />
					<CalloutGroupItem text="Sass"
						imgSrc={sasslogo}
						imgAlt="Sass logo" />
					<CalloutGroupItem text="Vercel"
						imgSrc={vercelLogo}
						imgAlt="Vercel logo" />
				</CalloutGroup>
				<CalloutGroup header="Created">
					<CalloutGroupItem text="April 2020" />
				</CalloutGroup>
				<CalloutGroup>
					<Tag>
						<span style={{ marginRight: '0.5rem' }}
							role="img"
							aria-label="Crane emoji for Front end development">
							🏗️
						</span>{' '}
						Front end development*
					</Tag>
					<Tag>
						<span style={{ marginRight: '0.5rem' }}
							role="img"
							aria-label="Tools emoji and palette emoji for UX/visual design">
							🛠️ 🎨
						</span>{' '}
						UX/Visual design
					</Tag>
				</CalloutGroup>
			</DetailCallout>
		</div>
	);
};

export default CovidStat;
