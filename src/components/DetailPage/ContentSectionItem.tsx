import type { ReactNode } from 'react';
import styles from './DetailPage.module.css';

interface ContentSectionItemProps {
  children: ReactNode;
  header?: string;
  /** Render the header as an h4 instead of an h5. */
  largeHeader?: boolean;
}

const ContentSectionItem = ({ children, header, largeHeader = false }: ContentSectionItemProps) => (
  <div className={styles.contentSectionItem}>
    {largeHeader ? <h4>{header}</h4> : <h5>{header}</h5>}
    {children}
  </div>
);

export default ContentSectionItem;
