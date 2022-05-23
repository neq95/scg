import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStatus, getAllPriorityIds } from 'store/slices/project';

import SkeletonColumn from 'components/Skeleton/Column';
import SkeletonTask from 'components/Skeleton/Task';
import ProjectTaskColumn from 'features/Project/Task/Column';

// import { fetchTasks } from 'store/slices/project/tasks';
// import { useAppDispatch } from 'store';
import { Statuses } from 'models/Enums/Statuses';
import styles from './styles.module.css';

const ProjectTaskList: React.FC = () => {
  // const {projectId} = useParams();
  // const dispatch = useAppDispatch();
  const status = useSelector(getStatus);
  const priorityIds = useSelector(getAllPriorityIds);

  // useEffect(() => {
  //   if (projectId) {
  //     dispatch(fetchTasks({projectId}));
  //   }
  // }, []);

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
            <section className={styles.columns}>
              {priorityIds.map((id) => {
                return (
                  <section className={styles.column} key={id}>
                    <ProjectTaskColumn priorityId={id} />
                  </section>
                );
              })}
            </section>
          )
        : null
     }
    </>
  );
};

export default ProjectTaskList;