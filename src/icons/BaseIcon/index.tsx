import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface propsInterface {
  size: 'small' | 'medium' | 'big' | 'large';
}

const BaseIcon : React.FC<propsInterface> = ({size = 'small', children}) => {
  return (
    <svg
      className={cn(styles.icon, styles[size])}
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