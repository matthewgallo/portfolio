import type { ReactNode } from 'react';
import Text from '../Text/Text';
import styles from './DetailPage.module.css';

interface CalloutGroupItemProps {
  text: ReactNode;
  /** Logo shown before the text. */
  imgSrc?: string;
  /** Accessible label for the logo or emoji. */
  imgAlt?: string;
  /** Shown before the text when there's no logo. */
  emoji?: string;
}

const CalloutGroupItem = ({ text, imgSrc, imgAlt, emoji }: CalloutGroupItemProps) => {
  if (imgSrc) {
    return (
      <Text>
        <span className={styles.calloutGroupItemTool}>
          <img className={styles.calloutGroupItemLogo} src={imgSrc} alt={imgAlt} />
          {text}
        </span>
      </Text>
    );
  }

  if (emoji) {
    return (
      <Text>
        <span className={styles.calloutGroupItemTool}>
          <span className={styles.calloutGroupItemEmoji} role="img" aria-label={imgAlt}>
            {emoji}
          </span>
          {text}
        </span>
      </Text>
    );
  }

  return <Text>{text}</Text>;
};

export default CalloutGroupItem;
