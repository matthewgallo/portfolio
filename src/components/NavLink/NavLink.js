import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ url, externalLink, className, openModal, name }) => {
	return (
		<li className="nav-link-item nav-link__space">
			{externalLink ? (
				<a href={url}
					className={`nav-link ${className || ''}`}
					onClick={openModal}>
					<span>{name}</span>
				</a>
			) : (
				<Link to={url}
					className={`nav-link ${className || ''}`}>
					<span>{name}</span>
				</Link>
			)}
		</li>
	);
};

NavLink.defaultProps = {
	className: '',
	externalLink: false,
	openModal: null,
};

NavLink.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	externalLink: PropTypes.bool,
	openModal: PropTypes.func,
};

export default NavLink;
