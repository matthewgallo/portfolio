import { createContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { COLOR_MODE_KEY, isColorMode, type ColorMode } from '../../theme';

interface ThemeContextValue {
	colorMode: ColorMode;
	setColorMode: (mode: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({ colorMode: 'light', setColorMode: () => {} });

// index.html sets data-theme before React loads; fall back to the system preference.
const getInitialColorMode = (): ColorMode => {
	const fromDocument = document.documentElement.dataset.theme;
	if (isColorMode(fromDocument)) return fromDocument;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [colorMode, rawSetColorMode] = useState<ColorMode>(getInitialColorMode);

	useEffect(() => {
		document.documentElement.dataset.theme = colorMode;
	}, [colorMode]);

	const contextValue = useMemo<ThemeContextValue>(() => {
		const setColorMode = (newValue: ColorMode) => {
			try {
				localStorage.setItem(COLOR_MODE_KEY, newValue);
			} catch {
				// storage unavailable (private mode, etc.) — theme still applies for this visit
			}
			rawSetColorMode(newValue);
		};

		return { colorMode, setColorMode };
	}, [colorMode]);

	return <ThemeContext value={contextValue}>{children}</ThemeContext>;
};

export { ThemeContext, ThemeProvider };
