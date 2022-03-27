import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';
import {ILabel} from 'models/Label';

interface ILabelProps extends ILabel {
  className?: string;
  size?: 'small' | 'medium';
}

const Label: React.FC<ILabelProps> = ({className, size = 'small', backgroundColor, color, text}) => {
  return (
    <div style={{backgroundColor}} className={cn(className, styles.label, styles[size])}>
      <span style={{color}} className={cn(styles.text, 'text-one-line')}>
        {text}
      </span>
    </div>
  );
};

export default Label;