import React from 'react';
import WorkItem from './WorkItem';
// import idl from '../assets/images/idl.png';
// import idl from '../assets/images/colors_homepage.svg';
// import idlDataViz from '../assets/images/idl_dataviz.png';
// import idlDataViz from '../assets/images/process_Data.svg';
// import idr from '../assets/images/idr.png';
// import missionM from '../assets/images/mission_m.svg';
// import blockchain2 from '../assets/images/blockchain2.jpg';
// import identity from '../assets/images/identity.jpg';
// import yamaFeed from '../assets/images/yama--work-feed.jpg';

// import ibpHome from '../assets/images/home_ibp.png';
// import yamaHome from '../assets/images/home_yama.png';
// import missionHome from '../assets/images/home_mission.png';
// import covidHome from '../assets/images/home_covid_stat.png';
import ibpHomeTransparent from '../assets/images/home_ibp_transparent.png';
import yamaHomeTransparent from '../assets/images/home_yama_transparent.png';
import missionHomeTransparent from '../assets/images/home_mission_transparent.png';
import covidHomeTransparent from '../assets/images/home_covid_stat_transparent.png';
import jeopardyHomeTransparent from '../assets/images/home_jeopardy.png'

//styles
import './work.scss';

const workItems = [
  {
    image: ibpHomeTransparent,
    name: 'IBM Blockchain Platform',
    url: '/work/ibm-blockchain-platform',
    tileSize: 'large',
    internalLink: true
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
    tileSize: 'large'
  },
  {
    image: missionHomeTransparent,
    name: 'Mission',
    tileSize: 'large'
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
    <section className="work-section" id="work">
      <ul className="work-list grid">
        {workItems.map(item => {
          return (
            <WorkItem
              key={item.workNumber}
              image={item.image}
              name={item.name}
              url={item.url}
              internalLink={item.internalLink ? item.internalLink : false}
              locked={item.locked ? item.locked : false}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Work;
