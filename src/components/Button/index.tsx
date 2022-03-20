import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface propsInterface {
  variant?: 'contained' | 'text';
  startIcon?: React.FC;
  endIcon?: React.FC;
  size?: 'small' | 'medium' | 'big' | 'large';
  fullWidth?: boolean,
  disabled?: boolean;
}

const Button : React.FC<propsInterface> = ({
  variant = 'text',
  startIcon,
  endIcon,
  size = 'small',
  fullWidth,
  disabled,
  children
}) => {
  return (
    <button
      className=
      {
        cn(styles.button, styles[variant], styles[size], {[styles.fullWidth]: fullWidth})
      }
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;