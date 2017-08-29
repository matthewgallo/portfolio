import React, { Component } from 'react';
import Work from './Work';

//styles
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Work />
      </div>
    );
  }
}

export default Home;
