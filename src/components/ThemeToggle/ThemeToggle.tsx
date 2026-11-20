import { useContext, useId, type CSSProperties } from 'react';
import cx from '../../utils/cx';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import styles from './ThemeToggle.module.css';

/** Stagger index for the ray animation, clockwise from the top. */
const order = (i: number) => ({ '--i': i }) as CSSProperties;

const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

/**
 * Sun/moon toggle in the logo's visual language: square-ended blocks filled with the brand
 * gradient and a soft glow. Switching to dark retracts the rays (staggered, like the logo hover)
 * while the core swells and a mask slides in to carve a crescent.
 */
const ThemeToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const isDark = colorMode === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  // Unique per instance; strip characters useId may emit that break url(#id) references.
  const id = useId().replace(/[^\w-]/g, '');
  const gradientId = `theme-toggle-gradient-${id}`;
  const maskId = `theme-toggle-mask-${id}`;

  return (
    <button
      className={cx(styles.button, isDark && styles.dark)}
      type="button"
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
      title={label}
      aria-label={label}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1={2} y1={12} x2={22} y2={12} gradientUnits="userSpaceOnUse">
            <stop offset={0} style={{ stopColor: 'var(--color-secondary)' }} />
            <stop offset={1} style={{ stopColor: 'var(--color-primary)' }} />
          </linearGradient>
          <mask id={maskId}>
            <rect width={24} height={24} fill="#fff" />
            <circle className={styles.cutout} cx={17} cy={7} r={7} fill="#000" />
          </mask>
        </defs>
        <g className={styles.body} fill={`url(#${gradientId})`}>
          <g mask={`url(#${maskId})`}>
            <circle className={styles.core} cx={12} cy={12} r={5} />
          </g>
          <g className={styles.rays}>
            {RAY_ANGLES.map((angle, i) => (
              <g key={angle} transform={`rotate(${angle} 12 12)`}>
                <rect className={styles.ray} style={order(i)} x={11} y={1} width={2} height={3.5} />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggle;
