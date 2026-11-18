import FadeIn from '../Animation/FadeIn';
import styles from './ScreenshotItem.module.css';

interface ScreenshotItemProps {
	title: string;
	subtitle?: string;
	src: string;
}

const ScreenshotItem = ({ title, subtitle = '', src }: ScreenshotItemProps) => (
	<div className={styles.container}>
		<div>
			<h5 className={styles.title}>{title}</h5>
			<small className={styles.subtitle}>{subtitle}</small>
		</div>
		<FadeIn>
			<div className={styles.imageWrapper}>
				<img className={styles.screenshot} src={src} alt={title} />
			</div>
		</FadeIn>
	</div>
);

export default ScreenshotItem;
