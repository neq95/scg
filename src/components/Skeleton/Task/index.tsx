import React from 'react';
import cn from 'classnames';

import BaseSkeleton from '../Base';

import styles from './styles.module.css';

const SkeletonTask: React.FC = () => {
  return (
    <div className={styles.task}>
      <BaseSkeleton className={cn(styles.item, styles.text)} />

      <BaseSkeleton className={cn(styles.item, styles.content)} />

      <BaseSkeleton className={cn(styles.item, styles.text)} />
    </div>
  );
};

export default SkeletonTask;