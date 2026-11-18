import type { ReactNode } from 'react';
import { Link, type LinkProps } from '@tanstack/react-router';
import cx from '../../utils/cx';
import styles from './GradientLink.module.css';

interface BaseProps {
	children: ReactNode;
	flex?: boolean;
	/** Overrides the default link color. */
	color?: string;
	bold?: boolean;
}

/** External links open in a new tab; internal links are type-checked against the route tree. */
type GradientLinkProps = BaseProps & ({ external: true; url: string } | { external?: false; url: LinkProps['to'] });

const GradientLink = ({ children, flex = false, color, bold = false, ...link }: GradientLinkProps) => {
	const className = cx(styles.link, flex && styles.flex, bold && styles.bold);
	const style = color ? { color } : undefined;

	return link.external ? (
		<a className={className} style={style} href={link.url} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	) : (
		<Link className={className} style={style} to={link.url}>
			{children}
		</Link>
	);
};

export default GradientLink;
