import type { CSSProperties, ReactNode } from 'react';
import Text from '../Text/Text';
import styles from './Tag.module.css';

interface TagProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Tag = ({ children, style }: TagProps) => (
  <div className={styles.tag} style={style}>
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </div>
);

export default Tag;
