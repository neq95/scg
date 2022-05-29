import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'layout/Container';
import IconButton from 'components/IconButton';
import Button from 'components/Button';
import SearchIcon from 'icons/Search';
import FilterIcon from 'icons/Filter';
import ProjectTaskList from 'features/Project/Task/List';

import { useAppDispatch } from 'store';
import { initialized, fetchProject } from 'store/slices/project';
import styles from './styles.module.css';

const ProjectDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {projectId} = useParams();

  useEffect(() => {
    if (!projectId) {
      return;
    }

    dispatch(initialized({projectId}));
    dispatch(fetchProject());
  }, []);

  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Список задач</h1>

          <ul className={styles.actions}>
            <li className={styles.action}>
              <IconButton size="big">
                <SearchIcon size="big" />
              </IconButton>
            </li>

            <li className={styles.action}>
              <IconButton size="big">
                <FilterIcon size="big" />
              </IconButton>
            </li>

            <li className={styles.action}>
              <Button variant="contained" size="large">
                Создать
              </Button>
            </li>
          </ul>
        </header>

        <div className={styles.main}>
          <ProjectTaskList />
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailPage;