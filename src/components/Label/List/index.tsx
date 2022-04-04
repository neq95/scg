import React from 'react';
import cn from 'classnames';

import Label from 'components/Label';

import styles from './styles.module.css';
import { ILabel } from 'models/Label';

interface ILabelListProps {
  className?: string;
  labels: ILabel[];
  limit?: number;
}

const LabelList: React.FC<ILabelListProps> = ({className, labels, limit}) => {
  const hasLimit = limit && limit > 0;
  const resolvedLabels = hasLimit ? labels.slice(0, limit) : labels;
  const remainCount = labels.length - resolvedLabels.length;

  return (
    <div className={cn(className, styles.wrapper)}>
      <ul className={cn(styles.list, styles.item)}>
        {resolvedLabels.map((label, index) => {
          return (
            <li className={styles.label} key={index}>
              <Label
                backgroundColor={label.backgroundColor}
                color={label.color}
                text={label.text}
              />
            </li>
          );
        })}
      </ul>

      <span className={cn(styles.remain, styles.item)}>
        {hasLimit && '+' + remainCount}
      </span>
    </div>
  );
};

export default LabelList;