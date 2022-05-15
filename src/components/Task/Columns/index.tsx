import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

type Props = {
  className?: string;
  columnIds: string[];
  renderColumn: (id: string) => JSX.Element
};

const TaskColumns: React.FC<Props> = ({className, columnIds, renderColumn}) => {
  return (
    <section className={cn(styles.columns, className)}>
      {columnIds.map((id) => {
        return (
          <section className={styles.column} key={id}>
            { renderColumn(id) }
          </section>
        );
      })}
    </section>
  );
};

export default TaskColumns;