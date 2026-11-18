import type { HTMLAttributes } from 'react';
import cx from '../../utils/cx';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './FadeIn.module.css';

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
	threshold?: number;
	/** Stay visible after the first time the element scrolls into view. */
	once?: boolean;
};

/** Fades and slides its children up as they scroll into view. */
const FadeIn = ({ threshold = 0, once = false, className, children, ...rest }: FadeInProps) => {
	const { inView, ref } = useIntersectionObserver<HTMLDivElement>({ threshold, once });

	return (
		<div {...rest} ref={ref} className={cx(styles.fadeIn, inView && styles.visible, className)}>
			{children}
		</div>
	);
};

export default FadeIn;
