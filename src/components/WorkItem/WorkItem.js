import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { COLORS } from '../../theme';
import Tag from '../Tag/Tag';
import { Styled } from './WorkItem.styles';

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

const WorkItem = ({ image, internalLink, name, url, locked, comingSoon }) => {
	const { colorMode } = useContext(ThemeContext);
	const renderContents = () => {
		return (
			<>
				<Styled.WorkItemImage src={image}
					alt="Work item" />
				<Styled.WorkItemContent colorMode={colorMode}>
					<h4>{name}</h4>
				</Styled.WorkItemContent>
				{comingSoon && (
					<Tag
						style={{
							minWidth: '180px',
							position: 'absolute',
							top: '1rem',
							right: '1rem',
							backgroundColor: colorMode && colorMode === 'dark' ? '#fff' : '#121619',
							color: colorMode && colorMode === 'dark' ? COLORS.text.light : COLORS.text.dark,
						}}
					>
						More coming soon
					</Tag>
				)}
				{locked ? lockIcon : null}
			</>
		);
	};

	const renderExternalOrDisabledItem = () => {
		return !internalLink && url ? (
			<Styled.WorkItemLink href={url}
				target="_blank"
				rel="noopener noreferrer">
				{renderContents()}
			</Styled.WorkItemLink>
		) : (
			<Styled.WorkItemButton
				type="button"
				disabled
				style={{
					background: 'transparent',
					border: '0',
					display: 'flex',
					width: '100%',
					minHeight: '24rem',
					textAlign: 'left',
					padding: '0',
				}}
			>
				{renderContents()}
			</Styled.WorkItemButton>
		);
	};

	const linearAngle = Math.floor(Math.random() * 360) + 1;

	return (
		<Styled.WorkItem
			style={{
				color: 'red',
				backgroundImage: `linear-gradient( ${linearAngle && linearAngle}deg, ${
					colorMode && colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light
				} 0%, ${colorMode && colorMode === 'dark' ? COLORS.secondary.dark : COLORS.secondary.light} 100% )`,
			}}
		>
			{internalLink && url ? <Styled.WorkItemRouterLink to={url}>{renderContents()}</Styled.WorkItemRouterLink> : renderExternalOrDisabledItem()}
		</Styled.WorkItem>
	);
};

WorkItem.defaultProps = {
	locked: false,
	url: '',
	comingSoon: false,
};

WorkItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	url: PropTypes.string,
	internalLink: PropTypes.bool.isRequired,
	locked: PropTypes.bool,
	comingSoon: PropTypes.bool,
};

export default WorkItem;
