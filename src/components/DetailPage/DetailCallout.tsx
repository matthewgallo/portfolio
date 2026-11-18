import type { ReactNode } from 'react';
import SectionMaxWidth from '../SectionMaxWidth/SectionMaxWidth';
import styles from './DetailPage.module.css';

interface DetailCalloutProps {
	header: ReactNode;
	children: ReactNode;
}

const DetailCallout = ({ children, header }: DetailCalloutProps) => (
	<div className={styles.callout}>
		<SectionMaxWidth>
			<h4 className={styles.calloutHeader}>{header}</h4>
			<div className={styles.calloutOverview}>{children}</div>
		</SectionMaxWidth>
	</div>
);

export default DetailCallout;
