import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { RootState } from 'store';
import { getProjectById } from 'store/slices/project/list';
import {formatToDottedView, formatToISOView} from 'utils/date';
import styles from './styles.module.css';

interface IProjectCardProps {
  className?: string;
  id: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({className, id}) => {
  const project = useSelector((state: RootState) => getProjectById(state, id));

  const formattedDate = formatToDottedView(project.createdAt * 1000);
  const ISODate = formatToISOView(project.createdAt * 1000);

  return (
    <div className={cn(className, styles.card)}>
      <h3 className={cn(styles.title, styles.row, 'text-one-line')}>
        { project.title }
      </h3>

      <p className={cn(styles.description, styles.row, 'text-two-lines')}>
        { project.description }
      </p>

      <div className={cn(styles.info, styles.row)}>
        <time className={styles.date} dateTime={ISODate}>
          { formattedDate }
        </time>
      </div>
    </div>
  );
};

export default ProjectCard;