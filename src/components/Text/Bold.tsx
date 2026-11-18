import type { ReactNode } from 'react';
import cx from '../../utils/cx';
import styles from './Bold.module.css';

const SIZE_CLASSES = {
  'expressive-heading': styles.expressiveHeading,
  'expressive-heading-02': styles.expressiveHeading02,
  'expressive-heading-03': styles.expressiveHeading03,
  'expressive-heading-04': styles.expressiveHeading04,
  'expressive-heading-05': styles.expressiveHeading05,
};

export type BoldSize = keyof typeof SIZE_CLASSES;

interface BoldProps {
  children: ReactNode;
  size?: BoldSize;
  /** Bottom margin (CSS length). */
  margin?: string;
  secondary?: boolean;
}

const Bold = ({ children, size, margin = '0', secondary = false }: BoldProps) => (
  <span className={cx(styles.bold, size && SIZE_CLASSES[size], secondary && styles.secondary)} style={{ marginBottom: margin }}>
    {children}
  </span>
);

export default Bold;
