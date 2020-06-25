import React from 'react';

import './gradientLink.scss';

const GradientLink = ({ children, external, url, block, paddingBottom, className, flex, color, bold }) => {
	return (
		<a
			href={url}
			className={`gradient--link ${className}`}
			target={external ? '_blank' : null}
			style={{
				display: block ? 'block' : flex ? 'flex' : 'initial',
				paddingBottom: paddingBottom ? '.25rem' : null,
				color: color ? color : null,
				fontWeight: bold ? '600' : null
			}}
		>
			{children}
		</a>
	);
};

export default GradientLink;