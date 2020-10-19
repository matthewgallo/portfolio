import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ImageContext = createContext({
	imageProps: {},
	hasChanged: false,
	setChanged: () => {},
	setImageProps: () => {},
});

const ImageProvider = ({ children }) => {
	const [imageProps, setImageProps] = useState({ x: 0, y: 0, w: 0, h: 0 });
	const [hasChanged, setChanged] = useState(false);
	return <ImageContext.Provider value={{ imageProps, setImageProps, hasChanged, setChanged }}>{children}</ImageContext.Provider>;
};

ImageProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ImageProvider;
