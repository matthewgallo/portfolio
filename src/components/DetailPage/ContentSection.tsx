import type { ReactNode } from 'react';
import styles from './DetailPage.module.css';

const ContentSection = ({ children }: { children: ReactNode }) => <div className={styles.contentSection}>{children}</div>;

export default ContentSection;
