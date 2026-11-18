import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 style={{ paddingBottom: '1rem' }}>Hello!</h3>
          <h3>I՚m Matt, a front end developer / designer.</h3>
          <p style={{ paddingTop: '1.5rem' }}>
            I currently work as a lead UX/front end engineer for Carbon for IBM Products, a design system used by software products at IBM. I enjoy learning new
            things, some of which currently include react hooks, redux, svg animations, and framer motion{' '}
            <span role="img" aria-label="Star emoji">
              💫
            </span>
            .
          </p>
        </div>
      </div>
      <div className={styles.portrait} id="portrait">
        <div className={styles.portraitImage} />
        <div className={styles.portraitHoverContainer}>
          <div className={styles.portraitHoverImage} />
        </div>
      </div>
    </>
  );
};

export default About;
