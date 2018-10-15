import React, { Component } from 'react';
import WorkItem from './WorkItem';
import idl from '../assets/images/idl.png';
import idlDataViz from '../assets/images/idl_dataviz.png';
import idr from '../assets/images/idr.png';
import a11y from '../assets/images/a11y.png';
import blockchain from '../assets/images/blockchain.jpg';
import yamaFeed from '../assets/images/yama--work-feed.jpg';

//styles
import './work.css';

class Work extends Component {
  render() {
    return (
      <section className="work-section" id="work" ref={'work'}>
        <WorkItem
          image={blockchain}
          name="IBM Blockchain Platform"
          url="https://www.ibm.com/blockchain"
          workDescription="From frictionless supply chains to food we can really trust, learn how industries are revolutionizing business with IBM Blockchain. Let’s put smart to work."
          workDetails="Development and UX"
          workNumber="1"
        />
        <WorkItem
          image={yamaFeed}
          name="Project Yama"
          url="/project-yama"
          workDescription="A platform that allows IBM designers to share their design work internally, creating more visibility into the work being done across the business."
          workDetails="Development, research, and UX"
          workNumber="2"
        />
        <WorkItem
          image={idl}
          name="IBM Design Language"
          url="https://www.ibm.com/design/language"
          workDescription="The IBM Design Language is a shared vocabulary for doing great design. Mix the elements together to design for delightful experiences that help people accomplish their goals."
          workDetails="Front end development"
          workNumber="3"
        />
        <WorkItem
          image={a11y}
          name="IBM Accessibility Handbook"
          url="ibm.biz/a11y-handbook"
          workDescription="Use the IBM Design Accessibility Handbook to create products for everyone."
          workDetails="Front end development and UX"
          workNumber="4"
        />
        <WorkItem
          image={idr}
          name="IBM Design Research"
          url="https://www.ibm.com/design/research"
          workDescription="Learn about IBM Design Research: our way to drive evidence-based user outcomes through continuous understanding."
          workDetails="Front end development"
          workNumber="5"
        />
        <WorkItem
          image={idlDataViz}
          name="IBM Design Language Data Visualization guidelines"
          url="https://www.ibm.com/design/language/experience/data-visualization"
          workDescription="See how IBM uses data visualization to provide meaningful context and precision."
          workDetails="Front end development"
          workNumber="6"
        />
      </section>
    );
  }
}

export default Work;
