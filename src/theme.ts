// Theme colors live as CSS custom properties in src/styles/global.css, switched by
// <html data-theme="light|dark">. The JS copy below is only for places that can't use
// CSS variables (e.g. SVG presentation attributes).
export type ColorMode = 'light' | 'dark';

export const COLORS = {
  text: { light: '#1d1d1f', dark: '#f5f5f7' },
  background: { light: '#ffffff', dark: '#1d1d1f' },
  backgroundSecondary: { light: '#f4f4f4', dark: '#393939' },
  primary: { light: '#34bc6e', dark: '#FF7043' }, // green / deep orange 400
  secondary: { light: '#3c6df0', dark: '#69F0AE' }, // blue / green A200
} as const satisfies Record<string, Record<ColorMode, string>>;

export const COLOR_MODE_KEY = 'color-mode';

export const isColorMode = (value: unknown): value is ColorMode => value === 'light' || value === 'dark';
