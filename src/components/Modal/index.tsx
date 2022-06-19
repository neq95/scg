import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
  className?: string;
}

const Modal: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(className, styles.modal)}>
      
    </div>
  );
};

export default Modal;