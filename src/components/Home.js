import React, { Component } from 'react';
import Work from './Work';

//styles
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>HOME</h1>
        <Work />
      </div>
    );
  }
}

export default Home;
