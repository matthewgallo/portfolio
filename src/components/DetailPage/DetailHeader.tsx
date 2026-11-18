import type { ReactNode } from 'react';
import styles from './DetailHeader.module.css';

interface DetailHeaderProps {
	title: ReactNode;
	subtitle: ReactNode;
	headerImage: {
		src: string;
		alt: string;
	};
}

const DetailHeader = ({ title, subtitle, headerImage }: DetailHeaderProps) => (
	<div className={styles.container}>
		<div className={styles.content}>
			<div className={styles.headerText}>
				<h4>{title}</h4>
				<p>{subtitle}</p>
			</div>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={headerImage.src} alt={headerImage.alt} />
			</div>
		</div>
	</div>
);

export default DetailHeader;
