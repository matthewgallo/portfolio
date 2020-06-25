import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navLink.scss';

class NavLink extends Component {
  render() {
    return (
      <li className="nav-link-item nav-link__space">
        {this.props.externalLink
          ? <a
          href={this.props.url}
          className={`nav-link mg--bold ${this.props.className ? this.props.className : ''}`}
          onClick={this.props.openModal}
        >
          <span>{this.props.name}</span>
        </a>
          : <Link to={this.props.url}
            className={`nav-link mg--bold ${this.props.className ? this.props.className : ''}`}
          >
            <span>{this.props.name}</span>
          </Link>
        }
      </li>
    );
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  externalLink: PropTypes.bool,
};

export default NavLink;
