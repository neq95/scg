import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'layout/Container';
import CircleDotsLoader from 'components/Loader/Circle/Dots';
import IconButton from 'components/IconButton';
import Button from 'components/Button';
import SearchIcon from 'icons/Search';
import FilterIcon from 'icons/Filter';
import ProjectTaskList from 'features/Project/Task/List';

import { LoaderColors } from 'models/Enums/Loader';
import { Statuses } from 'models/Enums/Statuses';
import { useAppDispatch } from 'store';
import { fetchProject } from 'store/slices/project';
import { fetchTasks } from 'store/slices/project/tasks';
import styles from './styles.module.css';

const ProjectDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {projectId} = useParams();

  useEffect(() => {
    if (!projectId) {
      return;
    }

    dispatch(fetchProject({projectId}));
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
      {/* {
        status === Statuses.idle
        ? null
        : status === Statuses.loading 
        ? (
          <div className={styles.loader}>
            <CircleDotsLoader color={LoaderColors.primary} size="huge" />
          </div>
         ) 
        : status === Statuses.failed 
        ? <p>{error}</p> 
        : 
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
      } */}
    </div>
  );
};

export default ProjectDetailPage;