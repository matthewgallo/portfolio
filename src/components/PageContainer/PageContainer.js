import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import Precursor from '../Precursor/Precursor';

const PageContainer = ({ children }) => {
	const [precursorOpen, closePrecursor] = useState(true);
	const precursorAnimation = useSpring({
		opacity: precursorOpen ? 1 : 0,
		zIndex: precursorOpen ? 2001 : 0,
	});

	return (
		<div>
			<Precursor precursorOpen={precursorOpen}
				closePrecursor={() => closePrecursor(false)}
				precursorStyles={precursorAnimation} />
			{children}
		</div>
	);
};

PageContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageContainer;
