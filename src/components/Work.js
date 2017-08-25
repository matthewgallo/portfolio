import React, { Component } from 'react';
import WorkItem from './WorkItem';
import idl from '../assets/images/idl.png';
import idlDataViz from '../assets/images/idl_dataviz.png';
import idr from '../assets/images/idr.png';
import a11y from '../assets/images/a11y.png';

//styles
import './work.css';

class Work extends Component {
  render() {
    return (
      <section className="work-section" id="work" ref={'work'}>
        <WorkItem
          image={idl}
          name="IBM Design Language"
          url="https://www.ibm.com/design/language"
          workDescription="The IBM Design Language is a shared vocabulary for doing great design. Mix the elements together to design for delightful experiences that help people accomplish their goals."
          workDetails="Front end development"
          workNumber="1"
        />
        <WorkItem
          image={a11y}
          name="IBM Accessibility Handbook"
          url="ibm.biz/a11y-handbook"
          workDescription="Use the IBM Design Accessibility Handbook to create products for everyone."
          workDetails="Front end development and UX"
          workNumber="2"
        />
        <WorkItem
          image={idr}
          name="IBM Design Research"
          url="https://www.ibm.com/design/research"
          workDescription="Learn about IBM Design Research: our way to drive evidence-based user outcomes through continuous understanding."
          workDetails="Front end development"
          workNumber="3"
        />
        <WorkItem
          image={idlDataViz}
          name="IBM Design Language Data Visualization guidelines"
          url="https://www.ibm.com/design/language/experience/data-visualization"
          workDescription="See how IBM uses data visualization to provide meaningful context and precision."
          workDetails="Front end development"
          workNumber="4"
        />
      </section>
    );
  }
}

export default Work;
