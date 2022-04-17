import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';
import {formatToDottedView, formatToISOView} from 'utils/date';

interface IProjectCardProps {
  className?: string;
  id: string;
}

const card = {
  title: 'проект 1',
  description: 'Равным образом укрепление и развитие структуры способствует подготовки и разработки',
  timestamp: Date.now(),
};

const ProjectCard: React.FC<IProjectCardProps> = ({className, id}) => {
  const formattedDate = formatToDottedView(card.timestamp);
  const ISODate = formatToISOView(card.timestamp);

  return (
    <div className={cn(className, styles.card)}>
      <h3 className={cn(styles.title, styles.row)}>
        { card.title }
      </h3>

      <p className={cn(styles.description, styles.row)}>
        { card.description }
      </p>

      <div className={cn(styles.info, styles.row)}>
        <time dateTime={ISODate}>
          { formattedDate }
        </time>
      </div>
    </div>
  );
};

export default ProjectCard;