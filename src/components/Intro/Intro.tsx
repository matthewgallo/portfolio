import type { CSSProperties, PointerEvent } from 'react';
import LogoPattern from './LogoPattern';
import styles from './Intro.module.css';

/** Entrance stagger index; each line rises in shortly after the one above it. */
const step = (i: number) => ({ '--step': i }) as CSSProperties;

/** Tracks the pointer as CSS vars so the spotlight glow follows it (no React re-render). */
const trackPointer = (event: PointerEvent<HTMLElement>) => {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
  el.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
};

const Intro = () => {
  return (
    <section className={styles.container} onPointerMove={trackPointer}>
      <LogoPattern className={styles.pattern} />
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow} style={step(0)}>
            <span className={styles.accentBlock} aria-hidden="true" />
            Hi!{' '}
            <span className={styles.wave} role="img" aria-label="waving hand">
              👋🏻
            </span>{' '}
            My name is
          </p>
          <h1 className={styles.name} style={step(1)}>
            Matt Gallo
          </h1>
          <p className={styles.tagline} style={step(2)}>
            Building design systems
          </p>
          <p className={styles.description} style={step(3)}>
            I&apos;m a senior front end engineer currently working on design systems at <strong>Fidelity Investments</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
