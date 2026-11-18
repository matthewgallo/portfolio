import GradientLink from '../GradientLink/GradientLink';
import Logo from '../Intro/Logo';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<button className={styles.logoButton} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						<Logo
							style={{
								height: '50px',
								transition: 'fill 0.8s ease',
								width: '88px',
							}}
						/>
					</button>
				</div>
				<ul className={styles.linkContainer}>
					<li>
						<GradientLink url="https://www.linkedin.com/in/matt-gallo-1090748a/" external bold>
							LinkedIn
						</GradientLink>
					</li>
					<li>
						<GradientLink url="https://github.com/matthewgallo/" external bold>
							Github
						</GradientLink>
					</li>
				</ul>
				<span className={styles.copyright}>&copy; {CURRENT_YEAR} matt gallo</span>
			</div>
		</footer>
	);
};

export default Footer;
