import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../components/Nav';
import mgLogo from '../assets/images/mg--logo-2.svg';

//styles
import './notFound.scss';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Nav openModal={this.openModal} />
        <section className="not-found-container">
          <div>
            <img
              className="not-found-logo"
              src={mgLogo}
              alt="Matt Gallo logo"
            />
            <h4>Page not found :(</h4>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(NotFound);
