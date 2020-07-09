import React from 'react';
import WorkItem from '../WorkItem/WorkItem';
import { Styled } from './Work.styles';
import ibpHomeTransparent from '../../assets/images/home_ibp_transparent.png';
import yamaHomeTransparent from '../../assets/images/home_yama_transparent.png';
import missionHomeTransparent from '../../assets/images/home_mission_transparent.png';
import covidHomeTransparent from '../../assets/images/home_covid_stat_transparent.png';
import jeopardyHomeTransparent from '../../assets/images/home_jeopardy.png';

const workItems = [
	{
		image: ibpHomeTransparent,
		name: 'IBM Blockchain Platform',
		url: '/work/ibm-blockchain-platform',
		tileSize: 'large',
		internalLink: true,
	},
	{
		image: covidHomeTransparent,
		name: 'Covidstat.dev',
		url: '/work/covid-stat',
		tileSize: 'large',
		internalLink: true,
	},
	{
		image: jeopardyHomeTransparent,
		name: 'Jeopardy!',
		url: '/work/jeopardy',
		internalLink: true,
		tileSize: 'large',
	},
	{
		image: missionHomeTransparent,
		name: 'Mission',
		tileSize: 'large',
		internalLink: true,
		comingSoon: true,
	},
	{
		image: yamaHomeTransparent,
		name: 'Project Yama',
		url: '/project-yama',
		internalLink: true,
		tileSize: 'large',
		locked: true,
	},
];

const Work = () => {
	return (
		<Styled.WorkSection>
			<Styled.WorkListGrid>
				{workItems.map(item => {
					return (
						<WorkItem
							key={item.name}
							image={item.image}
							name={item.name}
							url={item.url}
							internalLink={item.internalLink ? item.internalLink : false}
							locked={item.locked ? item.locked : false}
							comingSoon={item.comingSoon}
						/>
					);
				})}
			</Styled.WorkListGrid>
		</Styled.WorkSection>
	);
};

export default Work;
