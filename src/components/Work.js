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
      <section className="work-section" name="work" id="work">
        <WorkItem
          backgroundImage={idl}
          name="IBM Design Language"
          url="https://www.ibm.com/design/language"
          workDescription="The IBM Design Language is a shared vocabulary for doing great design. Mix the elements together to design for delightful experiences that help people accomplish their goals."
          workDetails="Front end development"
          workNumber="1"
        />
        <WorkItem
          backgroundImage={a11y}
          name="IBM Accessibility Handbook"
          url="ibm.biz/a11y-handbook"
          workDescription="One size does not fit all. Accessibility asks us to be authentically thoughtful and embrace constraints—and it starts with our empathy for others."
          workDetails="Front end development and UX"
          workNumber="2"
        />
        <WorkItem
          backgroundImage={idr}
          name="IBM Design Research"
          url="https://www.ibm.com/design/research"
          workDescription="The principles of IBM Design Research guide teams to continually develop their understanding. When practiced successfully, each team member is aligned to objectives that direct them towards user outcomes."
          workDetails="Front end development"
          workNumber="3"
        />
        <WorkItem
          backgroundImage={idlDataViz}
          name="IBM Design Language Data Visualization guidelines"
          url="https://www.ibm.com/design/language/experience/data-visualization"
          workDescription="Visualizing data is central to this key moment in time, when the borders between big and impersonal, and small and intimate data will blur as we’ve never seen before. The greater the quantity and kinds of data collected, the more we need to experiment with how to make it unique."
          workDetails="Front end development"
          workNumber="4"
        />
      </section>
    );
  }
}

export default Work;
