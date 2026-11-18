import type { ReactNode } from 'react';
import cx from '../../utils/cx';
import styles from './Text.module.css';

interface TextProps {
	children: ReactNode;
	/** 0.875rem. Takes precedence over `medium`. */
	small?: boolean;
	/** 1rem (only applies when `small` is false). Otherwise 1.25rem. */
	medium?: boolean;
	/** Bottom margin: a CSS length, otherwise defaults to 1.5rem. */
	margin?: boolean | string;
	contained?: boolean;
}

const Text = ({ children, small = true, medium = false, margin = false, contained = false }: TextProps) => {
	const marginBottom = typeof margin === 'string' ? margin : '1.5rem';
	return (
		<p className={cx(styles.contentText, small ? styles.small : medium && styles.medium, contained && styles.contained)} style={{ marginBottom }}>
			{children}
		</p>
	);
};

export default Text;
