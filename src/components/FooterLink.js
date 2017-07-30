import React, {Component} from 'react';
import PropTypes from 'prop-types';

//styles
import './footerLink.scss';

class FooterLink extends Component {
  render() {
    return (
      <li className="footer-link-item">
				<a href={this.props.url} className="footer-link mg--bold">{this.props.name}</a>
      </li>
    )
  }
}

FooterLink.propTypes = {
		url: PropTypes.string.isRequired,
		name:PropTypes.string.isRequired,
}

export default FooterLink;
