import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface propsInterface {
  size?: 'small' | 'medium' | 'big' | 'large';
  variant?: 'contained' | 'simple';
  disabled?: boolean;
}

const IconButton : React.FC<propsInterface> = ({
  size = 'small',
  variant = 'simple',
  disabled,
  children,
}) => {
  return (
    <button
      className={cn(styles.button, styles[size], styles[variant])}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default IconButton;