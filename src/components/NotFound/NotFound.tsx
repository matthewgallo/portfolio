import Logo from '../Intro/Logo';
import styles from './NotFound.module.css';

const NotFound = () => (
  <section className={styles.container}>
    <div>
      <Logo className={styles.logo} />
      <h4>Page not found</h4>
    </div>
  </section>
);

export default NotFound;
