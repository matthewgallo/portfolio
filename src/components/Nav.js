import React, { Component } from 'react';
import NavLink from './NavLink';
import { withRouter } from 'react-router-dom';
import mgLogoNav from '../assets/images/mg--logo-single-color.svg';

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
    if (screen.width >= 768 && this.state.mobileNavOpen) {
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
              <img src={mgLogoNav} alt="MG Logo" className="mg--logo-nav" />
            </a>
          </div>
          <ul className="nav-links desktop-nav-links">
            {this.props.location.pathname === '/'
              ? <NavLink url="#work" name="Work" />
              : null}
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
              {this.props.location.pathname === '/'
                ? <NavLink className="moble-nav-link mg--alpha" url="#work" />
                : null}
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
