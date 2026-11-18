import { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.css';

const getPercentScrolled = () => {
  const { scrollHeight, clientHeight } = document.documentElement;
  const trackLength = scrollHeight - clientHeight;
  return trackLength > 0 ? (window.scrollY / trackLength) * 100 : 0;
};

const ScrollProgress = () => {
  const [percentScrolled, setPercentScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPercentScrolled(getPercentScrolled());
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.indicator} style={{ width: `${percentScrolled}%` }} />
    </div>
  );
};

export default ScrollProgress;
