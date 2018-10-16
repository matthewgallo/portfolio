import React, { Component } from 'react';
import Work from './Work';

//styles
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div id="main-content" className="home-container">
        <Work />
      </div>
    );
  }
}

export default Home;
