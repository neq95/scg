import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface propsInterface {
  className?: string;
  variant?: 'contained' | 'text';
  startIcon?: React.FC;
  endIcon?: React.FC;
  size?: 'small' | 'medium' | 'big' | 'large';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button : React.FC<propsInterface> = ({
  className,
  variant = 'text',
  startIcon,
  endIcon,
  size = 'small',
  fullWidth,
  type = 'button',
  disabled,
  children
}) => {
  return (
    <button
      className=
      {
        cn(className, styles.button, styles[variant], styles[size], {[styles.fullWidth]: fullWidth})
      }
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;