const COLORS = {
	text: {
		light: '#1d1d1f',
		dark: '#f5f5f7',
	},
	background: {
		light: '#ffffff',
		dark: '#1d1d1f',
	},
	backgroundSecondary: {
		light: '#f4f4f4',
		dark: '#393939',
	},
	primary: {
		light: '#34bc6e', // --> green
		dark: '#FF7043', // --> deep orange 400
	},
	secondary: {
		light: '#3c6df0', // --> blue
		dark: '#69F0AE', // --> green A200
	},
	lightGray: {
		light: '#f4f4f4',
		dark: '#525252',
	},
	gray: {
		light: '#a8a8a8',
		dark: '#393939',
	},
	darkGray: {
		light: '#121619',
		dark: '#262626',
	},
};

const COLOR_MODE_KEY = 'color-mode';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
const CURRENT_COLOR_MODE_CSS_PROP = '--current-color-mode';

export { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP, CURRENT_COLOR_MODE_CSS_PROP };
