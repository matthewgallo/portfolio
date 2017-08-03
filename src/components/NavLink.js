import React, {Component} from 'react';
import PropTypes from 'prop-types';

//styles
import './navLink.scss';

class NavLink extends Component {
  render() {
    return (
      <li className="nav-link-item">
				<a href={this.props.url} className={`nav-link mg--bold ${this.props.className}`}>
					<span>{this.props.name}</span>
				</a>
      </li>
    )
  }
}

NavLink.propTypes = {
		className: PropTypes.string,
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
}

export default NavLink;
