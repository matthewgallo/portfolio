import type { ReactNode } from 'react';
import styles from './SectionMaxWidth.module.css';

const SectionMaxWidth = ({ children }: { children: ReactNode }) => <div className={styles.container}>{children}</div>;

export default SectionMaxWidth;
