import React from 'react';
import cn from 'classnames';

import CrossIcon from 'icons/CrossIcon';
import CheckIcon from 'icons/CheckIcon';

import styles from './styles.module.css';

interface IStatusProps {
  value: 'success' | 'fail';
  className?: string;
}

const Status: React.FC<IStatusProps> = ({className, value}) => {
  const icon = value === 'success' 
    ? <CheckIcon size="extra-small" />
    : <CrossIcon size="extra-small" />;

  return (
    <span className={cn(className, styles.status, styles[value])}>
      {icon}
    </span>
  );
};

export default Status;