import React from 'react';

import Container from 'layout/Container';
import ProjectList from 'features/Project/List';

const ProjectListPage: React.FC = () => {
  return (
    <div className="page">
      <Container>
        <ProjectList />
      </Container>
    </div>
  );
};

export default ProjectListPage; 