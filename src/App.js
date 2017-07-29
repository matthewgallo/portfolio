import React, {Component} from 'react';
import Footer from './components/Footer';

//styles
import './App.scss';
import './type/type_media_queries.scss';
import './type/type_scale_settings.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
				<h1>Hello</h1>
				<h2>Hello</h2>
				<h3>Hello</h3>
				<h4>Hello</h4>
				<h5>Hello</h5>
				<h6>Hello</h6>
				<small>Hello caption</small>
				<Footer />
      </div>
    )
  }
}

export default App;
