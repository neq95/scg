import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface propsInterface {
  className?: string,
  size?: 'small' | 'medium' | 'big' | 'large';
  variant?: 'contained' | 'simple';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton : React.FC<propsInterface> = ({
  className,
  size = 'small',
  variant = 'simple',
  type = 'button',
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(className, styles.button, styles[size], styles[variant])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton;