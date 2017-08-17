import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import './navLink.css';

class NavLink extends Component {
  render() {
    return (
      <li className="nav-link-item nav-link__space">
        <a
          href={this.props.url}
          className={`nav-link mg--bold ${this.props.className}`}
          onClick={this.props.openModal}
        >
          <span>
            {this.props.name}
          </span>
        </a>
      </li>
    );
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default NavLink;
