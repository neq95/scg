import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProjectCard from 'features/Project/Card';

import { RootState, useAppDispatch } from 'store';
import { fetchProjects, getStatus } from 'store/slices/project/list';
import { getProjectIds } from 'store/slices/project/list';
import { Statuses } from 'models/Enums/Statuses';

import styles from './styles.module.css';

type Props = {
  className?: string;
};

const ProjectList: React.FC<Props> = ({className}) => {
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => getStatus(state));
  const projectIds = useSelector((state: RootState) => getProjectIds(state));

  useEffect(() => {
    dispatch(fetchProjects({from: 1, to: 20}));
  }, []);

  const renderedProjects = () => {
    return (
      <ul className={styles.list}>
        {projectIds.map((id) => {
          return (
            <li key={id} className={styles.card}>
              <ProjectCard id={id} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={className}>
      {
        status === Statuses.loading 
        ? <p>Loading...</p> 
        : renderedProjects()
      }
    </div>
  );
};

export default ProjectList;