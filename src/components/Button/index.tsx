import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface propsInterface {
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: React.FC;
  endIcon?: React.FC;
}

const Button : React.FC<propsInterface> = ({variant = 'text', startIcon, endIcon, children}) => {
  return (
    <button className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  )
}

export default Button;