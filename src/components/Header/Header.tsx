import { useLocation } from '@tanstack/react-router';
import GradientLink from '../GradientLink/GradientLink';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import Logo from '../Intro/Logo';
import styles from './Header.module.css';

const Header = () => {
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <GradientLink bold url="/" color="var(--color-text)">
            <Logo
              interactive
              style={{
                blockSize: '1rem',
                inlineSize: '100%',
              }}
            />
          </GradientLink>
        </div>
        <ul className={styles.actions}>
          <ThemeToggle />
          {/* <button className={styles.toggleNavButton}
						onClick={toggleNavOpen}
						type="button">
						<div className={styles.navMenuLine} />
						<div className={styles.navMenuLine} />
					</button> */}
        </ul>
      </div>
      {pathname !== '/' && <ScrollProgress />}
    </header>
  );
};

export default Header;
