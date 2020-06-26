import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './workItem.scss';

const lockIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		title="Lock icon"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		style={{
			position: 'absolute',
			right: '1rem',
			top: '1rem',
		}}
	>
		<path fill="none"
d="M0 0h24v24H0z" />
		<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
	</svg>
);

const gradients = [
	{
		color1: '#fbc2eb',
		color2: '#a6c1ee',
	},
	{
		color1: '#fdcbf1',
		color2: '#e6dee9',
	},
	{
		color1: '#a1c4fd',
		color2: '#c2e9fb',
	},
	{
		color1: '#84fab0',
		color2: '#8fd3f4',
	},
	{
		color1: '#a6c0fe',
		color2: '#f68084',
	},
	{
		color1: '#fccb90',
		color2: '#d57eeb',
	},
	{
		color1: '#e0c3fc',
		color2: '#8ec5fc',
	},
	{
		color1: '#4facfe',
		color2: '#00f2fe',
	},
	{
		color1: '#43e97b',
		color2: '#38f9d7',
	},
	{
		color1: '#a8edea',
		color2: '#fed6e3',
	},
	{
		color1: '#5ee7df',
		color2: '#b490ca',
	},
	{
		color1: '#89f7fe',
		color2: '#66a6ff',
	},
	{
		color1: '#fff1eb',
		color2: '#ace0f9',
	},
	{
		color1: '#accbee',
		color2: '#e7f0fd',
	},
	{
		color1: '#93a5cf',
		color2: '#e7f0fd',
	},
	{
		color1: '#6e45e2',
		color2: '#88d3ce',
	},
];

const WorkItem = ({ image, internalLink, name, url, locked }) => {
	const renderContents = () => {
		return (
			<>
				<img src={image}
alt="Work item"
className="work-item--image" />
				<div className="work-item--mask" />
				<div className="work-item--reveal-mask" />
				<div className="work-item--content">
					<h4>{name}</h4>
				</div>
				{locked ? lockIcon : null}
			</>
		);
	};

	const linearAngle = Math.floor(Math.random() * 360) + 1;
	const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

	return (
		<li
			className="work-projects-item"
			style={{
				color: 'red',
				backgroundImage: `linear-gradient(${linearAngle && linearAngle}deg, ${randomGradient?.color1} 0%, ${randomGradient?.color2} 100%)`,
			}}
		>
			{internalLink ? (
				<Link to={url}
className="work-projects-item-link">
					{renderContents()}
				</Link>
			) : (
				<a href={url}
className="work-projects-item-link"
target="_blank"
rel="noopener noreferrer">
					{renderContents()}
				</a>
			)}
		</li>
	);
};

WorkItem.defaultProps = {
	locked: false,
	url: '',
};

WorkItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	url: PropTypes.string,
	internalLink: PropTypes.bool.isRequired,
	locked: PropTypes.bool,
};

export default WorkItem;
