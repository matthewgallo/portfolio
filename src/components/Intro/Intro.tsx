import Bold from '../Text/Bold';
import Text from '../Text/Text';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div>
            <h3 className={styles.heading}>
              <Text small={false} medium margin>
                Hi! 👋🏻 My name is
              </Text>
              <Bold margin="0.5rem" size="expressive-heading">
                Matt Gallo
              </Bold>
              <Bold size="expressive-heading-03" margin="2rem" secondary>
                Building design systems
              </Bold>
              <Text small={false} medium contained margin="0">
                I&apos;m a front end engineer currently working on design systems at Fidelity Investments.
              </Text>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
