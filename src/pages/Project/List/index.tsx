import React from 'react';

import Container from 'layout/Container';
import IconButton from 'components/IconButton';
import MenuIcon from 'icons/Menu';
import FilterIcon from 'icons/Filter';
import ProjectList from 'features/Project/List';

import styles from './styles.module.css';
import PlusIcon from 'icons/Plus';

const ProjectListPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Container>
        <header className={styles.header}>
          <IconButton size="big">
            <MenuIcon size="big" />
          </IconButton>

          <h1 className={styles.title}>Проекты</h1>

          <IconButton size="big">
            <FilterIcon size="big" />
          </IconButton>
        </header>

        <div className={styles.subheader}>
          <h2 className={styles.subtitle}>Все</h2>

          <div className={styles.actions}>
            <IconButton className={styles.action} size="big">
              <PlusIcon size="big" />
            </IconButton>

            <IconButton className={styles.action} size="big">
              <FilterIcon size="big" />
            </IconButton>
          </div>
        </div>

        <ProjectList className={styles.list} />
      </Container>
    </div>
  );
};

export default ProjectListPage; 