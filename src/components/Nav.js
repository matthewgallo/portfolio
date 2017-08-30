import React, { Component } from 'react';
import NavLink from './NavLink';
import { withRouter } from 'react-router-dom';

//styles
import './nav.css';

class Nav extends Component {
  state = {
    mobileNavOpen: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.closeNavOnDesktop);
  }

  componentDidUpdate() {
    if (this.state.mobileNavOpen) {
      document.body.classList.add('mobile-nav-stop-scroll');
    } else if (!this.state.mobileNavOpen) {
      document.body.classList.remove('mobile-nav-stop-scroll');
    }
  }

  closeNavOnDesktop = () => {
    if (window.innerWidth >= 768 && this.state.mobileNavOpen) {
      this.setState({ mobileNavOpen: false });
    }
  };

  toggleMobileNav = e => {
    e.preventDefault();
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
  };

  render() {
    return (
      <nav className="site-navigation">
        <div className="nav-content">
          <div className="nav-logo">
            <a href="/" className="nav-logo-link">
              <svg
                className="mg--logo-nav"
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
            </a>
          </div>
          <ul className="nav-links desktop-nav-links">
            {this.props.location.pathname === '/' ? '' : null}
            <NavLink name="About" openModal={this.props.openModal} />
            <button
              className={
                this.state.mobileNavOpen
                  ? 'mobile-nav-open mobile-nav'
                  : 'mobile-nav-closed mobile-nav'
              }
              href="mobile-nav"
              onClick={this.toggleMobileNav}
            >
              <div className="mobile-nav-line" />
              <div className="mobile-nav-line" />
              <div className="mobile-nav-line" />
            </button>
          </ul>
        </div>
        {this.state.mobileNavOpen
          ? <div className="mobile-nav-container">
              {this.props.location.pathname === '/' ? '' : null}
              <NavLink
                url="#about"
                name="About"
                className="moble-nav-link mg--alpha"
                navClick={this.props.openModal}
              />
            </div>
          : ''}
      </nav>
    );
  }
}

export default withRouter(Nav);
