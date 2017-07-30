import React, {Component} from 'react';
import PropTypes from 'prop-types';

//styles
import './navLink.scss';

class NavLink extends Component {
  render() {
    return (
      <li className="nav-link-item">
				<a href={this.props.url} className="nav-link mg--bold">{this.props.name}</a>
      </li>
    )
  }
}

NavLink.propTypes = {
		url: PropTypes.string.isRequired,
		name:PropTypes.string.isRequired,
}

export default NavLink;
