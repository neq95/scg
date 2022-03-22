import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface IProps {
  className?: string;
}

const Container: React.FC<IProps> = ({className, children}) => {
  return (
    <div className={cn(className, styles.container)}>
      {children}
    </div>
  )
};

export default Container;