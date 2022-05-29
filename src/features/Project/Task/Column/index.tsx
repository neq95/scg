import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import PriorityLabel from 'components/Priority/Label';
import ProjectTaskCard from 'features/Project/Task/Card';
import Scrollbar from 'components/Scrollbar';
import IconButton from 'components/IconButton';
import PlusIcon from 'icons/Plus';

import { RootState, useAppDispatch } from 'store';
import { getPriorityById, getPriorityTaskIdsById, taskCreatingStarted } from 'store/slices/project';
import styles from './styles.module.css';

type Props = {
  priorityId: string;
};

const ProjectTaskColumn: React.FC<Props> = ({priorityId}) => {
  const dispatch = useAppDispatch();
  const priority = useSelector((state: RootState) => getPriorityById(state, priorityId));
  const taskIds = useSelector((state: RootState) => getPriorityTaskIdsById(state, priorityId));

  const onTaskAddClick = () => {
    dispatch(taskCreatingStarted({priorityId}));
  };

  const renderContent = () => {
    return (
      <Scrollbar className={cn(styles.content, {[styles.empty]: !priority.taskAdditing && taskIds.length === 0})}>
        <ul className={styles.list}>
          {
            priority.taskAdditing && 
            <li className={styles.item}>
              <div className={styles.addition}>

              </div>
            </li>
          } 

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
          <PriorityLabel className={styles.priority} color={priority.color} />

          <h3 className={styles.nameText}>
            {priority.name}
          </h3>

          <IconButton className={styles.add} size="medium" onClick={onTaskAddClick}>
            <PlusIcon size="medium" />
          </IconButton>
        </div>
      </header>

      {renderContent()}
    </div>
  );
};

export default ProjectTaskColumn;