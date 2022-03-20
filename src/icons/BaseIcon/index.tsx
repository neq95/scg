import React from 'react';
import cn from 'classnames';

import { iconPropsInterface } from 'models/icon';
import styles from './styles.module.css';


const BaseIcon : React.FC<iconPropsInterface> = ({className, size = 'small', children}) => {
  return (
    <svg
      className={cn(className, styles.icon, styles[size])}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      tabIndex={-1}
    >
      { children }
    </svg>
  )
}

export default BaseIcon;