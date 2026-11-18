import { Link } from '@tanstack/react-router';
import cx from '../../utils/cx';
import styles from './Nav.module.css';

interface NavProps {
	open: boolean;
	toggleNavOpen: () => void;
}

const Nav = ({ open, toggleNavOpen }: NavProps) => (
	<nav className={cx(styles.nav, open && styles.open)}>
		<div className={styles.content}>
			<div className={styles.contentContainer}>
				<h5>matt gallo</h5>
				<ul className={styles.linkList}>
					<li>
						<Link className={styles.pageLink} to="/" onClick={toggleNavOpen}>
							home
						</Link>
					</li>
					<li>
						<Link className={styles.pageLink} to="/about-me" onClick={toggleNavOpen}>
							about me
						</Link>
					</li>
				</ul>
				<span className={styles.wave}>
					<span role="img" aria-label="Hand wave">
						👋
					</span>
				</span>
			</div>
			<button className={styles.closeButton} onClick={toggleNavOpen} type="button" aria-label="Close menu">
				<div className={styles.closeIconPath} />
				<div className={styles.closeIconPath} />
			</button>
		</div>
	</nav>
);

export default Nav;
