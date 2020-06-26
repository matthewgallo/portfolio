import React from 'react';
import { PlayOutline24, PlayOutlineFilled24, PauseOutline24, PauseOutlineFilled24 } from '@carbon/icons-react';
import PropTypes from 'prop-types';

const Pause = ({ hovering }) => (hovering ? <PauseOutlineFilled24 fill="#34bc6e" /> : <PauseOutline24 fill="#34bc6e" />);

const Play = ({ hovering }) => (hovering ? <PlayOutlineFilled24 fill="#34bc6e" /> : <PlayOutline24 fill="#34bc6e" />);

const ToggleIcon = ({ paused, hovering }) => (paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />);

Pause.propTypes = {
	hovering: PropTypes.bool.isRequired,
};

Play.propTypes = {
	hovering: PropTypes.bool.isRequired,
};

ToggleIcon.propTypes = {
	hovering: PropTypes.bool.isRequired,
	paused: PropTypes.bool.isRequired,
};

export default ToggleIcon;
