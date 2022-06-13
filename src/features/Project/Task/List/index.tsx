import React from 'react';
import { useSelector } from 'react-redux';
import {getStatus, getAllPriorityIds} from 'store/slices/project/selectors';

import SkeletonColumn from 'components/Skeleton/Column';
import SkeletonTask from 'components/Skeleton/Task';
import ProjectTaskColumn from 'features/Project/Task/Column';
import Scrollbar from 'components/Scrollbar';

import { Statuses } from 'models/Enums/Statuses';
import styles from './styles.module.css';

const ProjectTaskList: React.FC = () => {
  const status = useSelector(getStatus);
  const priorityIds = useSelector(getAllPriorityIds);

  return (
    <>
     {
       status === Statuses.loading
        ? (
            <section className={styles.columns}>
              {[1,2,3,4].map((id) => {
                return (
                  <section className={styles.column} key={id}>
                    <SkeletonColumn withHeader elementsAmount={3} renderElement={() => <SkeletonTask />} />
                  </section>
                );
              })}
            </section>
          )
        : status === Statuses.succeeded
        ? (
            <Scrollbar className={styles.content} autoHide={false}>
              <section className={styles.columns}>
                {priorityIds.map((id) => {
                  return (
                    <section className={styles.column} key={id}>
                      <ProjectTaskColumn priorityId={id} />
                    </section>
                  );
                })}
              </section>
            </Scrollbar>
          )
        : null
     }
    </>
  );
};

export default ProjectTaskList;