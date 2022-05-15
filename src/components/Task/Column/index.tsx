import React from 'react';

import styles from './styles.module.css';

type Props = {
  elementIds: string[];
  renderElement: (id: string) => JSX.Element;
}

const TaskColumn: React.FC<Props> = ({elementIds, renderElement}) => {
  return (
    <ul className={styles.list}>
      {elementIds.map((id) => {
        return (
          <li className={styles.item} key={id}>
            { renderElement(id) }
          </li>
        );
      })}
    </ul>
  );
};

export default TaskColumn;