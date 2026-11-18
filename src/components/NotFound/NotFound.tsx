import Header from '../Header/Header';
import Logo from '../Intro/Logo';
import styles from './NotFound.module.css';

const NotFound = () => (
  <div>
    <Header />
    <section className={styles.container}>
      <div>
        <Logo className={styles.logo} />
        <h4>Page not found</h4>
      </div>
    </section>
  </div>
);

export default NotFound;
