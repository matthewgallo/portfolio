import type { ReactNode } from 'react';
import styles from './DetailPage.module.css';

interface CalloutGroupProps {
	header?: string;
	children: ReactNode;
}

const CalloutGroup = ({ children, header }: CalloutGroupProps) => (
	<div className={styles.calloutGroup}>
		<h5>{header}</h5>
		<div>{children}</div>
	</div>
);

export default CalloutGroup;
