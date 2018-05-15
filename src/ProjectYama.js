import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';
import Modal from 'react-modal';
import devices from './assets/images/devices.jpg';
import ghAPI from './assets/images/yama--gh-api.png';
import slack from './assets/images/yama--slack.jpg';
import box from './assets/images/yama--box.jpg';
import checkpoint from './assets/images/yama--Checkpointibm.jpg';
import ghe from './assets/images/yama--GHEibm.jpg';
import userflow from './assets/images/yama--userflow.png';
import userflow2 from './assets/images/yama--userflow2.jpg';
import wireframes from './assets/images/yama--wireframes.png';
import workFeed from './assets/images/yama--work-feed.jpg';
import upload from './assets/images/yama--upload.jpg';
import upload2 from './assets/images/yama--upload2.jpg';
import collaboratorsGif from './assets/images/yama--collaborators.gif';
import portfolioLib from './assets/images/yama--portfolio-lib.png';
import profile from './assets/images/yama--profile.jpg';
import profileOverlay from './assets/images/yama--profile-overlay.jpg';
import profileEmpty from './assets/images/yama--profile-empty.jpg';

//styles
import './projectYama.css';
import './type/type_scale_settings.css';

const pw = 'yama';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(37, 46, 106, .9)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '585px',
    boxShadow: '0 20px 80px 0 rgba(0,0,0,.55)',
    border: '0',
    borderRadius: '0',
    minHeight: '30rem',
    overflow: 'hidden',
    position: 'absolute',
    background: '#fff',
    padding: '20px',
    outline: '0',
  },
};

class ProjectYama extends Component {
  state = {
    modalIsOpen: false,
    showPageContent: false,
    value: '',
  };

  componentDidMount() {
    this.pwInput.focus();
  }

  openModal = e => {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = e => {
    e.preventDefault();
    this.setState({
      modalIsOpen: false,
    });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  showYama = e => {
    e.preventDefault();
    if (this.state.value === pw) {
      this.setState({
        showPageContent: true,
      });
    }
  };

  render() {
    return (
      <div className="project-yama">
        {this.state.showPageContent
          ? <div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className={{
                  base: 'myMODAL',
                  afterOpen:
                    'modal_after-open ReactModal__Overlay ReactModal__Overlay--after-open',
                  beforeClose: 'myClass_before-close',
                }}
              >
                <h2 className="mg--black">About Matt.</h2>
                <div>
                  <span className="mg--light-italic modal-intro">
                    Designer/Developer
                  </span>
                  working for{' '}
                  <li className="nav-link-item">
                    <a
                      className="nav-link mg--bold"
                      href="https://www.ibm.com/design"
                    >
                      IBM Design
                    </a>
                  </li>.
                </div>
                <div className="about-info">
                  <div>
                    I love to{' '}
                    <li className="nav-link-item">
                      <a
                        className="nav-link mg--bold"
                        href="https://www.github.com/matthewgallo"
                      >
                        code
                      </a>
                    </li>.
                  </div>
                  <div>
                    I live in{' '}
                    <li className="nav-link-item">
                      <a
                        className="nav-link mg--bold"
                        href="http://www.milb.com/index.jsp?sid=t234"
                      >
                        Raleigh, NC
                      </a>
                    </li>, previously{' '}
                    <li className="nav-link-item">
                      <a
                        href="http://torchystacos.com/"
                        className="nav-link mg--bold"
                      >
                        ATX
                      </a>
                    </li>.
                  </div>
                  <div>
                    I love{' '}
                    <li className="nav-link-item">
                      <a
                        className="nav-link mg--bold"
                        href="https://www.youtube.com/watch?v=clC6cgoh1sU"
                      >
                        jazz
                      </a>
                    </li>{' '}
                    too.
                  </div>
                </div>
                <a onClick={this.closeModal} className="close" />
                <h1 className="mg--black about-label">About</h1>
              </Modal>
              <Nav openModal={this.openModal} />
              <div className="project-yama-container">
                <h4 className="py--header">Project Yama for IBM</h4>
                <div className="py--about-container">
                  <div className="py--about-label">
                    <h5>Objective</h5>
                    <p>
                      Design and develop a platform that allows IBM designers to
                      share their design work internally.
                    </p>
                  </div>
                  <div className="py--about-label">
                    <h5>Roles</h5>
                    <p>Development, Research, UX</p>
                  </div>
                  <div className="py--about-label">
                    <h5>Team</h5>
                    <p>Evan Maeda (Design/Strategy/Research)</p>
                    <p>Hayley Hughes/James Rauhut (Advisory)</p>
                  </div>
                  <div className="py--about-label">
                    <h5>Duration</h5>
                    <p>4 months</p>
                  </div>
                </div>

                {/* Process */}
                <div className="py--process-container">
                  <h4 className="py--header">Process</h4>
                  <div className="py--process-item py--process-business-need">
                    <div className="py--process-item-inner">
                      <h5>Define business need</h5>
                      <p>
                        The IBM Design Language team needs visibility into its
                        adoption in design output of 1200 designers across 1,000
                        products sitting in 30+ locations globally.
                      </p>
                    </div>
                    <img
                      src={devices}
                      alt="Products samples across devices"
                      className="py--business-need-img"
                    />
                  </div>
                  <div className="py--process-user-needs">
                    <div className="py--process-item">
                      <h5>Challenges</h5>
                      <ol>
                        <li>
                          Limited resources: one designer and one developer
                        </li>
                        <li>
                          Create a tool that complements current existing tools
                        </li>
                        <li>
                          Introduces unique value that forms habit for longevity
                        </li>
                      </ol>
                    </div>
                    <div className="py--process-item">
                      <h5>What is the user problem?</h5>
                      <p>
                        IBM designers need a place to document and curate their
                        process and outcomes, to be used for{' '}
                        <span className="mg--semibold">
                          career advancement
                        </span>,{' '}
                        <span className="mg--semibold">
                          mentorship discovery
                        </span>, and{' '}
                        <span className="mg--semibold">inspiration</span>
                      </p>
                    </div>
                  </div>

                  <div className="py--challenge-1 py--section-end">
                    <h4>Challenge 1: Limited resources</h4>
                    <p>
                      After development discussions, it was clear that we would
                      need many resources that were not in our budget. File
                      storage, individual profiles, and commenting called for a
                      custom database, which we could not get approval for.
                    </p>
                    <div className="py--challenge-1-two-by-two">
                      <div className="py--challenge-1-left">
                        <h5>Solution</h5>
                        <p>Build the platform using GitHub API.</p>
                        <ul>
                          <li>
                            Allows confidential work to be shared, using GHE.
                          </li>
                          <li>
                            Ability to utilize GHE user accounts as profiles
                          </li>
                          <li>
                            Leverages issues as post submissions, commenting on
                            a post/issue, image uploading.
                          </li>
                        </ul>
                      </div>
                      <div className="py--challenge-1-right">
                        <img
                          src={ghAPI}
                          alt="GitHub API"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="py--challenge-1">
                    <h4>Challenge 2: Tool differentiation</h4>
                    <p>
                      The thought of introducing another tool to the plethora of
                      programs IBMers are using in their day-to-day was an
                      important aspect to research before design/development
                      started. I concentrated on the main tools used for sharing
                      working, and conducted research on where we could create
                      differentiation.
                    </p>

                    <div className="py--challenge-1-two-by-two">
                      <div className="py--challenge-1-left">
                        <img
                          src={slack}
                          alt="GitHub API"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                      <div className="py--challenge-1-right">
                        <img
                          src={box}
                          alt="GitHub API"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                    </div>

                    <div className="py--challenge-1-two-by-two">
                      <div className="py--challenge-1-left">
                        <h5>Slack</h5>
                        <p>
                          The tool connects remote and co-located teams, and now
                          serves as the place for communication of over 100,000
                          IBMers. Although easy to chat on, design work sharing
                          and critiquing in virtual impossible in the fleeting
                          nature of slack channel discussions.
                        </p>
                        <p className="mg--semibold">
                          Our tool should facilitate design critique that’s
                          focused and documented.
                        </p>
                      </div>
                      <div className="py--challenge-1-right">
                        <h5>Box</h5>
                        <p>
                          The tool is used by designers, researchers, and
                          offering managers to sort assets, resources and
                          deliverables. Although the tool serves as a great
                          place to house your sketch files and presentation
                          decks, its interface isnt set up for effectively
                          viewing visual work, let alone contextual support.
                        </p>
                        <p className="mg--semibold">
                          Our tool should focus on visual discovery at speed,
                          without the need to house assets in all formats.{' '}
                        </p>
                      </div>
                    </div>

                    <div className="py--challenge-1-two-by-two">
                      <div className="py--challenge-1-left">
                        <img
                          src={ghe}
                          alt="GitHub API"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                      <div className="py--challenge-1-right">
                        <img
                          src={checkpoint}
                          alt="GitHub API"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                    </div>

                    <div className="py--challenge-1-two-by-two py--section-end">
                      <div className="py--challenge-1-left">
                        <h5>Github Enterprise</h5>
                        <p>
                          The tool is used by teams, where designers and
                          developers work together to build production-level
                          code. In GitHub Enterprise, teams gauge in important
                          product design critiques and is ultimately shaping the
                          product outcomes. However, This discussions and design
                          shares are done at a team level only.
                        </p>
                        <p className="mg--semibold">
                          Our tool should opens up design solutions for the
                          community to learn from and leverage.
                        </p>
                      </div>
                      <div className="py--challenge-1-right">
                        <h5>Checkpoint</h5>
                        <p>
                          {
                            "The internal tool is used by designers and managers to assess product team goals and work output. The goals set in Checkpoint are ultimately measuring the designer's success in driving business outcomes, and can lead to career advancement. However, these goals are done in a text-based format, opposite of the visual outcomes designers come to."
                          }
                        </p>
                        <p className="mg--semibold">
                          Our tool should support you justifying goals delivered
                          on, and shows you walked the walk.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py--challege-3">
                    <h4>Challenge 3: unique habit forming value</h4>
                    <p>
                      After understanding how we could differentiate our tool
                      from the others, we developed unique value propositions
                      for the platform that would scope us during development,
                      and build habit-forming experience that our designers
                      could get behind.
                    </p>
                    <div className="py--value-props">
                      <h4 className="mg--light">
                        Value proposition 1:{' '}
                        <span className="mg--semibold">
                          Findability & Discovery
                        </span>
                      </h4>
                      <h4 className="mg--light">
                        Value proposition 2:{' '}
                        <span className="mg--semibold">
                          Critique & Discussion
                        </span>
                      </h4>
                      <h4 className="mg--light">
                        Value proposition 3:{' '}
                        <span className="mg--semibold">
                          Documentation & Curation
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="py--user-flows py--section-end">
                    <h4>Developing User flows</h4>
                    <div className="py--challenge-1-two-by-two">
                      <div className="py--challenge-1-left">
                        <img
                          src={userflow}
                          alt="Userflow"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                      <div className="py--challenge-1-right">
                        <img
                          src={userflow2}
                          alt="Userflow"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                    </div>
                    <p>
                      In order to understand the best course of action for a
                      designer moving through our platform, we developed a user
                      flow for a "Getting Started" experience, and create
                      wireframes for those pages. We then held in person
                      feedback sessions allowing users to provide feedback on
                      the frames and flow.
                    </p>
                  </div>

                  <div className="py--section-end">
                    <h4>Wireframes</h4>
                    <img
                      src={wireframes}
                      alt="Wireframes screenshot"
                      className="py--full-image"
                    />
                  </div>

                  <div className="py--section-end">
                    <h4>Outcomes</h4>
                    <h5>Work Gallery Experience</h5>
                    <img
                      src={workFeed}
                      alt="Work feed screenshot"
                      className="py--full-image"
                    />
                    <p>
                      Our goal for the Work Gallery experience was to create
                      opportunities for designers coming to the platform to
                      engage in the way they wanted to as quickly as possible.
                      Those scenarios included:
                    </p>
                    <ul className="py--work-gallery-solution-list">
                      <li>
                        A designer looking for inspiration on a specific design
                        element, component, or pattern they are currently
                        working on.
                      </li>
                      <li>
                        <span className="mg--semibold">Solution</span>: Increase
                        tile size for easier investigation, more detailed hover
                        information, and prominent search engine.
                      </li>
                      <li>
                        {
                          "A designer looking to engage in discussion by providing feedback to another designer's work"
                        }
                      </li>
                      <li>
                        <span className="mg--semibold">Solution</span>: Card
                        corner icon soliciting feedback, helps distinguish the
                        projects that are actively looking for interaction.
                      </li>
                    </ul>
                  </div>

                  <div className="py--upload-experience py--section-end">
                    <h5>Upload Experience</h5>
                    <img
                      src={upload}
                      alt="Upload screenshot"
                      className="py--full-image"
                    />
                    <div className="py--challenge-1-two-by-two py--upload-collaborators-container">
                      <div className="py--challenge-1-left">
                        <p>
                          {
                            "My goal for the Upload Experience was to design a process that was quick enough that didn't consume too much time that interrupted their workflow, but also stressed the necessity of contextual support to generate effective discussion later on."
                          }
                        </p>
                        <p>Highlights:</p>
                        <p>
                          <span className="mg--semibold">Collaborators</span> --
                          being able to tag others in an upload, showcasing the
                          true nture of collaborative work.
                        </p>
                        <p>
                          <span className="mg--semibold">
                            WIP, SHIP, FLIP
                          </span>{' '}
                          -- designating different work types, allowing the
                          designs to be seen for where they are in the process.
                        </p>
                      </div>
                      <div className="py--challenge-1-right">
                        <img
                          src={collaboratorsGif}
                          alt="Userflow"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                    </div>
                    <img
                      src={upload2}
                      alt="Upload screenshot"
                      className="py--full-image"
                    />
                  </div>

                  <div className="py--portfolio-experience">
                    <div className="py--challenge-1-two-by-two py--upload-collaborators-container">
                      <div className="py--challenge-1-left">
                        <h5>Portfolio Experience</h5>
                        <p>
                          Our goal of the Portfolio experience was to design a
                          personal space for the designer, while creating an
                          environment that showcases their work and invites
                          others to dive deeper into their projects.
                        </p>
                        <p>
                          Metaphorical, we wanted the Portfolio experience to
                          feel like your bookcase at home - it had to feel like
                          a living, constantly updated mess of cleanliness.
                        </p>
                      </div>
                      <div className="py--challenge-1-right">
                        <img
                          src={portfolioLib}
                          alt="Library"
                          className="py--challenge-1-right-img"
                        />
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="Profile screenshot"
                      className="py--full-image"
                    />
                    <p>
                      {
                        "The bookcase feels were achieved through containing the designer's work uploads and creating uniformity to each card, as if they were cubby shelfs that contain your work and experiences."
                      }
                    </p>
                    <img
                      src={profileOverlay}
                      alt="Upload screenshot"
                      className="py--full-image"
                    />
                    <p>
                      The card design went through multiple iterations, but we
                      kept it high level, just enough context to know if you
                      should dive into the project. We also wanted to create
                      visual emphasis on the card your considering, but having
                      the hover state increase the white border.
                    </p>
                    <img
                      src={profileEmpty}
                      alt="Empty profile screenshot"
                      className="py--full-image"
                    />
                    <p>
                      Lastly, we wanted to share the empty state of the
                      workspace in the portfolio. An illustration was created
                      that lent itself to the call to action to get the designer
                      to stop what they were doing to take the time to document
                      their process.
                    </p>
                    <p className="mg--regular-italic">
                      Page design by{' '}
                      <span className="mg--semibold-italic">Evan Maeda</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="py--page-footer">
                <Link to="/" className="nav-logo-link py--footer-link">
                  <svg
                    className="mg--logo-nav py--footer-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 850 400"
                  >
                    <rect
                      id="Rectangle"
                      className="cls1"
                      width="100"
                      height="400"
                    />
                    <rect
                      id="Rectangle-Copy"
                      className="cls2"
                      x="300"
                      width="100"
                      height="400"
                    />
                    <rect
                      id="Rectangle-Copy-3"
                      className="cls3"
                      x="450"
                      width="400"
                      height="100"
                    />
                    <rect
                      id="Rectangle-Copy-4"
                      className="cls4"
                      x="450"
                      y="300"
                      width="400"
                      height="100"
                    />
                    <rect
                      id="Rectangle-Copy-2"
                      className="cls5"
                      x="150"
                      width="100"
                      height="200"
                    />
                    <rect
                      id="Rectangle-Copy-6"
                      className="cls6"
                      x="750"
                      y="200"
                      width="100"
                      height="200"
                    />
                    <rect
                      id="Rectangle-Copy-5"
                      className="cls7"
                      x="650"
                      y="150"
                      width="200"
                      height="100"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          : <div className="project-yama-password-overlay">
              <div className="project-yama-password-container">
                <svg viewBox="0 0 64 64" className="password-lock">
                  <path d="M40.2,29v-4c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2v4H21v15h22V29H40.2z M27.2,25 c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8v4h-9.5V25z" />
                </svg>
                <h4 className="project-yama-password-header">Project Yama</h4>
                <div className="input-container">
                  <form onSubmit={this.showYama}>
                    <input
                      className="project-yama-input"
                      value={this.state.value}
                      onChange={this.handleChange}
                      placeholder={'Password'}
                      type="password"
                      ref={input => {
                        this.pwInput = input;
                      }}
                    />
                    {this.state.value.length > 0
                      ? <button className="show-yama-button" type="submit">
                          <svg className="submit-icon">
                            <path
                              fill="#595959"
                              d="M15.293 10.707L19.586 15H8v2h11.586l-4.293 4.293 1.414 1.414L23.414 16l-6.707-6.707z"
                            />
                          </svg>
                        </button>
                      : null}
                  </form>
                </div>
              </div>
            </div>}
      </div>
    );
  }
}

export default ProjectYama;
