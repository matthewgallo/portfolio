import React, { useState } from 'react';
import Precursor from '../Precursor/Precursor';
import { useSpring } from "react-spring"

const PageContainer = props => {
	const [precursorOpen, closePrecursor] = useState(true);
    const precursorAnimation = useSpring({
      opacity: precursorOpen ? 1 : 0,
      zIndex: precursorOpen ? 2001 : 0,
	});

	return (
		<div>
			<Precursor precursorOpen={precursorOpen} closePrecursor={() => closePrecursor(false)} precursorStyles={precursorAnimation} />
			{props.children}
		</div>
	);
};

export default PageContainer;