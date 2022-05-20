import React from 'react';
import { useSelector } from 'react-redux';

import PriorityLabel from 'components/Priority/Label';
import ProjectTaskCard from 'features/Project/Task/Card';

import { RootState } from 'store';
import { getPriorityById, getPriorityTaskIdsById } from 'store/slices/project';
import styles from './styles.module.css';

type Props = {
  priorityId: string;
};

const ProjectTaskColumn: React.FC<Props> = ({priorityId}) => {
  const priority = useSelector((state: RootState) => getPriorityById(state, priorityId));
  const taskIds = useSelector((state: RootState) => getPriorityTaskIdsById(state, priorityId));

  // const renderContent = () => {
  //   return taskIds.length === 0
  //   ? <div className={styles.empty} />
  //   : (
  //     <ul className={styles.list}>
  //       {taskIds.map((id) => {
  //         return (
  //           <li className={styles.item} key={id}>
  //             { renderElement(id) }
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  //   // : <TaskColumn elementIds={taskIds} renderElement={renderElement} />;
  // };

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
        <ul className={styles.list}>
          {taskIds.map((id) => {
            return (
              <li className={styles.item} key={id}>
                <ProjectTaskCard id={id} priorityColor={priority.color} />
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default ProjectTaskColumn;