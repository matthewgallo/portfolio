import type { CSSProperties } from 'react';
import grain from '../../assets/images/grain.svg';
import cx from '../../utils/cx';
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
 * The upright tile is listed last so it renders the mesh gradient and assembles at the end.
 */
const TILES = [
  'rotate(180 425 200)',
  'translate(1548 425) rotate(90) translate(-1548 -425) translate(1123 225)',
  'translate(1098 425) rotate(-90) translate(-1098 -425) translate(673 225)',
  'translate(200 875) rotate(90) translate(-200 -875) translate(-225 675)',
  'translate(650 875) rotate(-90) translate(-650 -875) translate(225 675)',
  'translate(898 900)',
];

/**
 * Soft color fields for the featured tile's mesh gradient (tile coordinates). Each one drifts on its
 * own loop; the mismatched durations keep the blend from visibly repeating.
 */
const BLOBS = [
  { cx: 120, cy: 60, r: 340, color: 1, duration: 14, dx: 180, dy: 120 },
  { cx: 760, cy: 360, r: 360, color: 2, duration: 17, dx: -220, dy: -90 },
  { cx: 430, cy: 220, r: 260, color: 3, duration: 11, dx: 140, dy: -110 },
  { cx: 820, cy: 30, r: 250, color: 4, duration: 19, dx: -160, dy: 140 },
];

const BASE_GRADIENT_ID = 'mg-logo-pattern-gradient';
const BLOB_GRADIENT_ID = (color: number) => `mg-logo-pattern-blob-${color}`;
const MASK_ID = 'mg-logo-pattern-mask';
const GLOW_ID = 'mg-logo-pattern-glow';

const blockClass = (block: (typeof BLOCKS)[number]) => (block.height > block.width ? styles.vertical : styles.horizontal);
const delay = (tile: number, i: number) => ({ '--delay': `${tile * 110 + i * 45}ms` }) as CSSProperties;

/** Decorative MG pattern for the homepage hero: theme-aware, assembles block by block on load. */
const LogoPattern = ({ className }: { className?: string }) => {
  const featuredTile = TILES.length - 1;
  return (
    <svg className={cx(styles.pattern, className)} viewBox="0 0 1748 1300" aria-hidden="true" focusable="false">
      <defs>
        {/* Base layer under the mesh, spanning the tile's local 0–850 width. */}
        <linearGradient id={BASE_GRADIENT_ID} x1={0} y1={0} x2={850} y2={400} gradientUnits="userSpaceOnUse">
          <stop offset={0} style={{ stopColor: 'var(--color-secondary)' }} />
          <stop offset={1} style={{ stopColor: 'var(--color-primary)' }} />
        </linearGradient>
        {[1, 2, 3, 4].map((color) => (
          <radialGradient key={color} id={BLOB_GRADIENT_ID(color)}>
            <stop offset={0} style={{ stopColor: `var(--mesh-${color})` }} />
            <stop offset={0.55} style={{ stopColor: `var(--mesh-${color})`, stopOpacity: 0.45 }} />
            <stop offset={1} style={{ stopColor: `var(--mesh-${color})`, stopOpacity: 0 }} />
          </radialGradient>
        ))}
        {/* The featured mark's blocks cut the mesh into the MG shape, keeping the grow-in animation. */}
        <mask id={MASK_ID} maskUnits="userSpaceOnUse" x={0} y={0} width={850} height={400}>
          {BLOCKS.map((block, i) => (
            <rect key={i} {...block} fill="#fff" className={blockClass(block)} style={delay(featuredTile, i)} />
          ))}
        </mask>
        <GlowFilter id={GLOW_ID} tintClassName={styles.glowTint} />
      </defs>
      {TILES.map((transform, tile) =>
        tile === featuredTile ? (
          <g key={transform} transform={transform} className={styles.featured} filter={`url(#${GLOW_ID})`}>
            <g mask={`url(#${MASK_ID})`}>
              <rect width={850} height={400} fill={`url(#${BASE_GRADIENT_ID})`} />
              {BLOBS.map(({ color, duration, dx, dy, ...circle }) => (
                <circle
                  key={color}
                  {...circle}
                  fill={`url(#${BLOB_GRADIENT_ID(color)})`}
                  className={styles.blob}
                  style={{ '--duration': `${duration}s`, '--dx': `${dx}px`, '--dy': `${dy}px` } as CSSProperties}
                />
              ))}
              <image href={grain} width={850} height={400} preserveAspectRatio="none" className={styles.grain} />
            </g>
          </g>
        ) : (
          // Muted tiles stay flat; only the accent mark glows.
          <g key={transform} transform={transform} className={styles.tile}>
            {BLOCKS.map((block, i) => (
              <rect key={i} {...block} className={blockClass(block)} style={delay(tile, i)} />
            ))}
          </g>
        )
      )}
    </svg>
  );
};

export default LogoPattern;
