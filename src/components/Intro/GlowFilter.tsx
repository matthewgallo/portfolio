/**
 * SVG filter for the MG mark's glow: blurs a copy of the shape, fades it, and layers the
 * crisp original back on top. By default the halo picks up the mark's own gradient colors.
 * Blur is in user units, so it scales with the mark (tuned for its 850×400 geometry).
 * Render inside <defs> and apply with filter="url(#id)".
 */
interface GlowFilterProps {
  id: string;
  /**
   * Tints the halo a single color instead of the mark's gradient. The class sets (and can animate)
   * `flood-color` on the filter's <feFlood>.
   */
  tintClassName?: string;
}

const GlowFilter = ({ id, tintClassName }: GlowFilterProps) => (
  <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in={tintClassName ? 'SourceAlpha' : 'SourceGraphic'} stdDeviation={110} result="blur" />
    {tintClassName && (
      <>
        <feFlood className={tintClassName} result="tint" />
        <feComposite in="tint" in2="blur" operator="in" result="blur" />
      </>
    )}
    <feComponentTransfer in="blur" result="halo">
      <feFuncA type="linear" slope={0.6} />
    </feComponentTransfer>
    <feMerge>
      <feMergeNode in="halo" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

export default GlowFilter;
