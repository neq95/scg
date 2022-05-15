import React from 'react';
import { useSelector } from 'react-redux';

import TaskColumn from 'components/Task/Column';
import PriorityLabel from 'components/Priority/Label';
import ProjectTaskCard from 'features/Project/Task/Card';

import { RootState } from 'store';
import { getPriorityById } from 'store/slices/project/priorities';
import { getPriorityTaskIdsById } from 'store/slices/project/tasks';
import styles from './styles.module.css';

type Props = {
  priorityId: string;
};

const ProjectTaskColumn: React.FC<Props> = ({priorityId}) => {
  const priority = useSelector((state: RootState) => getPriorityById(state, priorityId));
  const taskIds = useSelector((state: RootState) => getPriorityTaskIdsById(state, priorityId));

  const renderElement = (id: string) => {
    return <ProjectTaskCard id={id} priorityColor={priority.color} />;
  };

  return (
    <div className={styles.column}>
      <header className={styles.header}>
        <div className={styles.name}>
          <PriorityLabel color={priority.color} />

          <h3 className={styles.nameText}>
            {priority.name}
          </h3>
        </div>
      </header>

      {
        taskIds.length === 0
          ? <div className={styles.empty}></div>
          : <TaskColumn elementIds={taskIds} renderElement={renderElement} />
      }
    </div>
  );
};

export default ProjectTaskColumn;