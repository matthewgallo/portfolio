import React, { Component } from 'react';
import Nav from './components/Nav';

//styles
import './projectYama.css';
import './type/type_scale_settings.css';

const pw = 'yama';

class ProjectYama extends Component {
  state = {
    showPageContent: false,
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  showYama = e => {
    e.preventDefault();
    if (this.state.value === pw) {
      this.setState({
        showPageContent: true,
      });
    }
  };

  render() {
    return (
      <div className="project-yama">
        {this.state.showPageContent
          ? null
          : <div className="project-yama-password-overlay">
              <div className="project-yama-password-container">
                <svg viewBox="0 0 64 64" className="password-lock">
                  <path d="M40.2,29v-4c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2v4H21v15h22V29H40.2z M27.2,25 c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8v4h-9.5V25z" />
                </svg>
                <h4 className="project-yama-password-header">Project Yama</h4>
                <div className="input-container">
                  <form onSubmit={this.showYama}>
                    <input
                      className="project-yama-input"
                      value={this.state.value}
                      onChange={this.handleChange}
                      placeholder={'Password'}
                      type="password"
                    />
                    <button className="show-yama-button" type="submit">
                      <svg className="submit-icon">
                        <path d="M15.293 10.707L19.586 15H8v2h11.586l-4.293 4.293 1.414 1.414L23.414 16l-6.707-6.707z" />
                        <path d="M16 2C8.269 2 2 8.269 2 16s6.269 14 14 14 14-6.269 14-14S23.731 2 16 2zm0 26C9.383 28 4 22.617 4 16S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>}
        <Nav openModal={this.openModal} />
        <div className="project-yama-container">
          <h1>Project Yama</h1>
        </div>
      </div>
    );
  }
}

export default ProjectYama;
