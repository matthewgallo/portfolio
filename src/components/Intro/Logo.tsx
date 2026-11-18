import { useId, type CSSProperties, type SVGProps } from 'react';
import cx from '../../utils/cx';
import GlowFilter from './GlowFilter';
import styles from './Logo.module.css';

interface LogoProps extends SVGProps<SVGSVGElement> {
  /** Plays a subtle staggered animation when the parent link/button is hovered or focused. */
  interactive?: boolean;
  /** Soft blurred halo in the logo's own gradient colors. On by default. */
  glow?: boolean;
}

/** Stagger index for the hover animation, in drawing order (M left-to-right, then G). */
const order = (i: number) => ({ '--i': i }) as CSSProperties;

const Logo = ({ interactive = false, glow = true, className, ...props }: LogoProps) => {
  // Unique per instance so multiple logos on a page don't share a filter; strip characters useId may emit.
  const glowId = `logo-glow-${useId().replace(/[^\w-]/g, '')}`;
  return (
    <svg viewBox="0 0 850 400" className={cx(styles.logo, interactive && styles.interactive, className)} {...props}>
      <defs>
        {glow && <GlowFilter id={glowId} />}
        <linearGradient id="prefix__linear-gradient" x1={1} y1={200} x2={849} y2={200} gradientUnits="userSpaceOnUse">
          <stop offset={0} style={{ stopColor: 'var(--color-secondary)' }} />
          <stop offset={1} style={{ stopColor: 'var(--color-primary)' }} />
        </linearGradient>
        <linearGradient id="prefix__linear-gradient-3" y1={50} y2={50} xlinkHref="#prefix__linear-gradient" />
        <linearGradient id="prefix__linear-gradient-4" y1={350} y2={350} xlinkHref="#prefix__linear-gradient" />
        <linearGradient id="prefix__linear-gradient-5" y1={100} y2={100} xlinkHref="#prefix__linear-gradient" />
        <linearGradient id="prefix__linear-gradient-6" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
        <linearGradient id="prefix__linear-gradient-7" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
        <linearGradient id="prefix__linear-gradient-8" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
        <linearGradient id="prefix__linear-gradient-9" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
        <style>{'.prefix__cls-1{fill:url(#prefix__linear-gradient)}'}</style>
      </defs>
      <title>MG Logo</title>
      <g id="prefix__Group" filter={glow ? `url(#${glowId})` : undefined}>
        <path id="prefix__Rectangle" className={styles.vertical} style={order(0)} fill="url(#prefix__linear-gradient-8)" d="M0 0h100v400H0z" />
        <path id="prefix__Rectangle-Copy" className={styles.vertical} style={order(2)} fill="url(#prefix__linear-gradient-9)" d="M300 0h100v400H300z" />
        <path id="prefix__Rectangle-Copy-3" className={styles.horizontal} style={order(3)} fill="url(#prefix__linear-gradient-3)" d="M450 0h400v100H450z" />
        <path id="prefix__Rectangle-Copy-4" className={styles.horizontal} style={order(5)} fill="url(#prefix__linear-gradient-4)" d="M450 300h400v100H450z" />
        <path id="prefix__Rectangle-Copy-2" className={styles.vertical} style={order(1)} fill="url(#prefix__linear-gradient-5)" d="M150 0h100v200H150z" />
        <path id="prefix__Rectangle-Copy-6" className={styles.vertical} style={order(4)} fill="url(#prefix__linear-gradient-6)" d="M750 200h100v200H750z" />
        <path id="prefix__Rectangle-Copy-5" className={styles.horizontal} style={order(6)} fill="url(#prefix__linear-gradient-7)" d="M650 150h200v100H650z" />
      </g>
    </svg>
  );
};

export default Logo;
