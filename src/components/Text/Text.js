import React from 'react';
import './text.scss';

const Text = ({ children, small, medium, margin }) => {
	const fontSize = small ? '.875rem' : medium ? '1rem' : '.875rem';
	return (
		<p
			className="content-text"
			style={{
				fontSize: fontSize,
				marginBottom: margin ? '1.5rem' : '0',
			}}
		>{children}</p>
	);
};

export default Text;