import type { ReactNode } from 'react';
import cx from '../../utils/cx';
import styles from './DetailPage.module.css';

const SplitContent = ({ children }: { children: ReactNode }) => <div className={styles.splitContent}>{children}</div>;

interface SplitContentItemProps {
  children: ReactNode;
  /** Adds right padding between columns. */
  maxWidth?: boolean;
}

export const SplitContentItem = ({ children, maxWidth = false }: SplitContentItemProps) => (
  <div className={cx(styles.splitContentItem, maxWidth && styles.splitContentItemPadded)}>{children}</div>
);

export default SplitContent;
