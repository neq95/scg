import React from 'react';
import { useSelector } from 'react-redux';

import TaskCard from 'components/Task/Card';

import { RootState } from 'store';
import { getTaskById } from 'store/slices/project/selectors';
import {toProjectTaskDetail} from 'utils/routes';

type Props = {
  id: string;
  priorityColor: string;
}

const ProjectTaskCard: React.FC<Props> = ({id, priorityColor}) => {
  const task = useSelector((state: RootState) => getTaskById(state, id));

  return (
    <TaskCard
      title={task.title}
      description={task.description}
      priorityColor={priorityColor}
      createdAt={task.createdAt}
      route={toProjectTaskDetail({taskId: id})}
    />
  );
};

export default ProjectTaskCard;