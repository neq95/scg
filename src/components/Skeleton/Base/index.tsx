import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

type Props = {
  className?: string;
  variant?: 'circular',
}

const BaseSkeleton: React.FC<Props> = ({className, variant}) => {
  return (
    <div className={cn(styles.skeleton, className, variant && styles[variant])}></div>
  );
};

export default BaseSkeleton;