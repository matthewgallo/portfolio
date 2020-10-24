import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { COLORS } from '../../theme';
import Tag from '../Tag/Tag';
import { Styled } from './WorkItem.styles';
import { ImageContext } from '../../contexts/imageContext';

const LockIcon = () => (
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

const transition = {
	duration: 0.6,
	ease: [0.43, 0.13, 0.23, 0.96],
};

const isEven = number => {
	if (number % 2 === 0) {
		return true;
	}
	return false;
};

const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		opacity: 0,
		y: 60,
		transition: {
			duration: 1,
		},
	},
};

const WorkItem = ({ index, image, internalLink, name, url, locked, comingSoon }) => {
	const { colorMode } = useContext(ThemeContext);
	const workItem = useRef();
	const imageRefElement = useRef();

	const { setImageProps, setChanged } = useContext(ImageContext);
	const [willFade, setWillFade] = useState(true);

	const getImageProps = () => {
		setWillFade(false);
		const currentImg = imageRefElement.current;
		const coordinates = currentImg.getBoundingClientRect();
		const newImgProps = {
			w: coordinates.width,
			h: coordinates.height,
			y: coordinates.y,
			x: coordinates.x,
		};
		setImageProps(newImgProps);
		setChanged(true);
	};

	const renderContents = itemUrl => {
		return (
			<Styled.WorkItemInner
				className={name}
				onClick={!comingSoon ? () => getImageProps() : () => {}}
				onKeyUp={() => getImageProps()}
				role="button"
				tabIndex={0}
				reverse={!isEven(index)}
			>
				<Styled.WorkItemRouterLink to={itemUrl || ''}>
					<Styled.WorkItemImage
						src={image}
						key={index}
						alt="Work item"
						ref={imageRefElement}
						transition={transition}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={
							willFade && {
								opacity: 0,
								transition: { delay: 0.1 * index },
							}
						}
					/>
				</Styled.WorkItemRouterLink>
				<Styled.WorkItemContent colorMode={colorMode}>
					<Styled.ProjectName colorMode={colorMode}
						transition={{ transition, delay: 0.1 * index }}
						variants={fadeInUp}>
						{name}
					</Styled.ProjectName>
					{!comingSoon && (
						<Styled.ViewProjectContainer transition={{ transition, delay: 0.1 * index }}
							variants={fadeInUp}>
							<Styled.ViewProjectLabel colorMode={colorMode}>View project</Styled.ViewProjectLabel>
							<Styled.ViewProjectDivider colorMode={colorMode} />
						</Styled.ViewProjectContainer>
					)}

					{comingSoon && (
						<Tag
							style={{
								minWidth: '180px',
								backgroundColor: colorMode && colorMode === 'dark' ? '#fff' : '#121619',
								color: colorMode && colorMode === 'dark' ? COLORS.text.light : COLORS.text.dark,
							}}
						>
							More coming soon
						</Tag>
					)}
					{locked ? <LockIcon /> : null}
				</Styled.WorkItemContent>
			</Styled.WorkItemInner>
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

	return (
		<Styled.WorkItem reverse={!isEven(index)}
			ref={workItem}>
			{internalLink && url ? renderContents(url) : renderExternalOrDisabledItem()}
		</Styled.WorkItem>
	);
};

WorkItem.defaultProps = {
	locked: false,
	url: '',
	comingSoon: false,
};

WorkItem.propTypes = {
	index: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	url: PropTypes.string,
	internalLink: PropTypes.bool.isRequired,
	locked: PropTypes.bool,
	comingSoon: PropTypes.bool,
};

export default WorkItem;
