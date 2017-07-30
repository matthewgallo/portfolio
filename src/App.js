import React, {Component} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

//styles
import './App.scss';
import './type/type_media_queries.scss';
import './type/type_scale_settings.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Nav />
				<Header />
				<Footer />
      </div>
    )
  }
}

export default App;
