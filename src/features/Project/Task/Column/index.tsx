import React from 'react';
import { useSelector } from 'react-redux';

import TaskColumn from 'components/Task/Column';
import PriorityLabel from 'components/Priority/Label';
import ProjectTaskCard from 'features/Project/Task/Card';
import TaskSkeleton from 'components/Skeleton/Task';

import { RootState } from 'store';
import { getPriorityById } from 'store/slices/project/priorities';
import { getPriorityTaskIdsById, getStatus } from 'store/slices/project/tasks';
import styles from './styles.module.css';
import { Statuses } from 'models/Enums/Statuses';

type Props = {
  priorityId: string;
};

const ProjectTaskColumn: React.FC<Props> = ({priorityId}) => {
  const status = useSelector(getStatus);
  const priority = useSelector((state: RootState) => getPriorityById(state, priorityId));
  const taskIds = useSelector((state: RootState) => getPriorityTaskIdsById(state, priorityId));

  const renderContent = () => {
    return taskIds.length === 0
    ? <div className={styles.empty} />
    : <TaskColumn elementIds={taskIds} renderElement={renderElement} />;
  };

  const renderElement = (id: string) => {
    return status === Statuses.loading
    ? <TaskSkeleton />
    : <ProjectTaskCard id={id} priorityColor={priority.color} />;
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
        status === Statuses.loading
        ? <TaskColumn elementIds={['1', '2']} renderElement={renderElement} />
        : status === Statuses.succeeded
        ? renderContent()
        : null
      }
    </div>
  );
};

export default ProjectTaskColumn;