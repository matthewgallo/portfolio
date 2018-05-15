import React, { Component } from 'react';
import Modal from 'react-modal';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';

//styles
import './App.css';
import './type/type_scale_settings.css';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(37, 46, 106, .9)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '585px',
    boxShadow: '0 20px 80px 0 rgba(0,0,0,.55)',
    border: '0',
    borderRadius: '0',
    minHeight: '30rem',
    overflow: 'hidden',
    position: 'absolute',
    background: '#fff',
    padding: '20px',
    outline: '0',
  },
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = e => {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Nav openModal={this.openModal} />
        <Header />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className={{
            base: 'myMODAL',
            afterOpen:
              'modal_after-open ReactModal__Overlay ReactModal__Overlay--after-open',
            beforeClose: 'myClass_before-close',
          }}
        >
          <h2 className="mg--black">About Matt.</h2>
          <div>
            <span className="mg--light-italic modal-intro">
              Designer/Developer
            </span>
            working for{' '}
            <li className="nav-link-item">
              <a
                className="nav-link mg--bold"
                href="https://www.ibm.com/design"
              >
                IBM Design
              </a>
            </li>.
          </div>
          <div className="about-info">
            <div>
              I love to{' '}
              <li className="nav-link-item">
                <a
                  className="nav-link mg--bold"
                  href="https://www.github.com/matthewgallo"
                >
                  code
                </a>
              </li>.
            </div>
            <div>
              I live in{' '}
              <li className="nav-link-item">
                <a
                  className="nav-link mg--bold"
                  href="http://www.milb.com/index.jsp?sid=t234"
                >
                  Raleigh, NC
                </a>
              </li>, previously{' '}
              <li className="nav-link-item">
                <a
                  href="http://torchystacos.com/"
                  className="nav-link mg--bold"
                >
                  ATX
                </a>
              </li>.
            </div>
            <div>
              I love{' '}
              <li className="nav-link-item">
                <a
                  className="nav-link mg--bold"
                  href="https://www.youtube.com/watch?v=clC6cgoh1sU"
                >
                  jazz
                </a>
              </li>{' '}
              too.
            </div>
          </div>
          <a onClick={this.closeModal} className="close" />
          <h1 className="mg--black about-label">About</h1>
        </Modal>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
