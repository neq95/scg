import React from 'react';
import cn from 'classnames';

import CrossIcon from 'icons/CrossIcon';
import CheckIcon from 'icons/CheckIcon';

import styles from './styles.module.css';
import {StatusEnum} from 'models/Status';

interface IStatusProps {
  className?: string;
  value: StatusEnum;
  variant?: 'outlined' | 'contained';
}

const iconMap = {
  [StatusEnum.SUCCESS]: <CheckIcon size="extra-small" />,
  [StatusEnum.FAIL]: <CrossIcon size="extra-small" />,
  [StatusEnum.PROGRESS]: null,
  [StatusEnum.IDLE]: null,
};

const Status: React.FC<IStatusProps> = ({className, value, variant = 'contained'}) => {
  const icon = iconMap[value];

  return (
    <span className={cn(className, styles.status, styles[value], styles[variant])}>
      {icon}
    </span>
  );
};

export default Status;