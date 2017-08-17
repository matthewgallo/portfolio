import React, { Component } from 'react';
import mgLogo from '../assets/images/mg--logo-2.svg';

//styles
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-container-inner">
          <div className="header-content">
            <div className="header-logo-container">
              <img className="header-logo" src={mgLogo} alt="Matt Gallo logo" />
            </div>
            <div className="header-name-container">
              <h1 className="mg--black">Matt Gallo</h1>
              <p className="mg--light-italic">
                Front end developer and designer
              </p>
            </div>
          </div>
        </div>
        <div href="work" className="scroll-down-icon">
          <span />
        </div>
      </header>
    );
  }
}

export default Header;
