import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Work from './components/Work';

//styles
import './App.css';
import './type/type_scale_settings.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
