import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface IPriorityLabelProps {
  className?: string;
  color: string;
}

const PriorityLabel: React.FC<IPriorityLabelProps> = ({className, color}) => {
  return (
    <span style={{backgroundColor: color}} className={cn(className, styles.label)} />
  );
};

export default PriorityLabel;