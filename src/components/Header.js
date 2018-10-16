import React, { Component } from 'react';
import mgLogo from '../assets/images/mg--logo-2.svg';

//styles
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.scrollToWork = this.scrollToWork.bind(this);
  }

  scrollToWork() {
    console.log('hello!');
    const mainContent = document.querySelector('#main-content');
    console.log(mainContent);
    mainContent.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    return (
      <header className="header-container">
        <div className="header-container-inner">
          <div className="header-content">
            <div className="header-logo-container">
              <img className="header-logo" src={mgLogo} alt="Matt Gallo logo" />
            </div>
            <div className="header-name-container">
              <h2 className="mg--black">Matt Gallo</h2>
              <p className="mg--light-italic">
                Front end developer and designer
              </p>
            </div>
          </div>
        </div>
        <div onClick={this.scrollToWork} className="scroll-down-icon" />
      </header>
    );
  }
}

export default Header;
