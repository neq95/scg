import React from 'react';
import cn from 'classnames';

import { LoaderColors } from 'models/Enums/Loader';
import styles from './styles.module.css';

interface IDotsLoaderProps {
  className?: string;
  size?: 'small' | 'medium' | 'big' | 'large';
  color?: LoaderColors,
}

const DotsLoader: React.FC<IDotsLoaderProps> = ({className, size = 'small', color = LoaderColors.white}) => {
  return (
    <div className={cn(className, styles.loader, styles[size], styles[color])}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default DotsLoader;