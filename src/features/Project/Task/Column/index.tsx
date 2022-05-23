import React from 'react';
import { useSelector } from 'react-redux';

import PriorityLabel from 'components/Priority/Label';
import ProjectTaskCard from 'features/Project/Task/Card';
import Scrollbar from 'components/Scrollbar';

import { RootState } from 'store';
import { getPriorityById, getPriorityTaskIdsById } from 'store/slices/project';
import styles from './styles.module.css';

type Props = {
  priorityId: string;
};

const ProjectTaskColumn: React.FC<Props> = ({priorityId}) => {
  const priority = useSelector((state: RootState) => getPriorityById(state, priorityId));
  const taskIds = useSelector((state: RootState) => getPriorityTaskIdsById(state, priorityId));

  const renderEmptyMessage = () => {
    return (
      <div className={styles.empty} >

      </div>
    );
  };

  const renderContent = () => {
    return (
      <Scrollbar className={styles.content}>
        <ul className={styles.list}>
          {taskIds.map((id) => {
            return (
              <li className={styles.item} key={id}>
                <ProjectTaskCard id={id} priorityColor={priority.color} />
              </li>
            );
          })}
        </ul>
      </Scrollbar>
    );
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
        ? renderEmptyMessage()
        : renderContent()
      }
    </div>
  );
};

export default ProjectTaskColumn;