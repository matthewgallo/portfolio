import type { CSSProperties } from 'react';
import GlowFilter from './GlowFilter';
import styles from './LogoPattern.module.css';

/** The seven blocks of the MG mark, in its 850×400 coordinate space (same geometry as Logo.tsx). */
const BLOCKS = [
  { x: 0, y: 0, width: 100, height: 400 },
  { x: 150, y: 0, width: 100, height: 200 },
  { x: 300, y: 0, width: 100, height: 400 },
  { x: 450, y: 0, width: 400, height: 100 },
  { x: 650, y: 150, width: 200, height: 100 },
  { x: 750, y: 200, width: 100, height: 200 },
  { x: 450, y: 300, width: 400, height: 100 },
];

/**
 * Six copies of the mark, rotated in 90° steps, tiled into a 1748×1300 field
 * (transforms taken from assets/images/mg--logo-pattern.svg).
 * The upright tile is listed last so it renders in the brand gradient and assembles at the end.
 */
const TILES = [
  'rotate(180 425 200)',
  'translate(1548 425) rotate(90) translate(-1548 -425) translate(1123 225)',
  'translate(1098 425) rotate(-90) translate(-1098 -425) translate(673 225)',
  'translate(200 875) rotate(90) translate(-200 -875) translate(-225 675)',
  'translate(650 875) rotate(-90) translate(-650 -875) translate(225 675)',
  'translate(898 900)',
];

const GRADIENT_ID = 'mg-logo-pattern-gradient';
const GLOW_ID = 'mg-logo-pattern-glow';

/** Decorative MG pattern for the homepage hero: theme-aware, assembles block by block on load. */
const LogoPattern = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1748 1300" aria-hidden="true" focusable="false">
    <defs>
      {/* Spans the upright tile (x 898–1748) so the gradient runs across the mark like the header logo. */}
      <linearGradient id={GRADIENT_ID} x1={898} y1={0} x2={1748} y2={0} gradientUnits="userSpaceOnUse">
        <stop offset={0} style={{ stopColor: 'var(--color-secondary)' }} />
        <stop offset={1} style={{ stopColor: 'var(--color-primary)' }} />
      </linearGradient>
      <GlowFilter id={GLOW_ID} tintClassName={styles.glowTint} />
    </defs>
    {TILES.map((transform, tile) => {
      const featured = tile === TILES.length - 1;
      return (
        <g
          key={transform}
          transform={transform}
          className={featured ? styles.featured : styles.tile}
          // Only the accent-colored mark glows; the muted tiles stay flat.
          filter={featured ? `url(#${GLOW_ID})` : undefined}
        >
          {BLOCKS.map((block, i) => (
            <rect
              key={i}
              {...block}
              fill={featured ? `url(#${GRADIENT_ID})` : undefined}
              className={block.height > block.width ? styles.vertical : styles.horizontal}
              style={{ '--delay': `${tile * 110 + i * 45}ms` } as CSSProperties}
            />
          ))}
        </g>
      );
    })}
  </svg>
);

export default LogoPattern;
