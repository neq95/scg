import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface ILabelProps {
  className?: string;
  size?: 'small' | 'medium';
  backgroundColor: string;
  color: string;
}

const Label: React.FC<ILabelProps> = ({className, size = 'small', backgroundColor, color, children}) => {
  return (
    <div style={{backgroundColor}} className={cn(className, styles.label, styles[size])}>
      <span style={{color}} className={cn(styles.text, 'text-one-line')}>
        {children}
      </span>
    </div>
  );
};

export default Label;