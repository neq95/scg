import React from 'react';
import cn from 'classnames';

import PriorityLabel from 'components/Priority/PriorityLabel';
import Status from 'components/Status';
import LabelList from 'components/Label/List';
import Label from 'components/Label';
import TimerIcon from 'icons/TimerIcon';

import styles from './styles.module.css';
import {ILabel} from 'models/Label';
interface ITaskCardProps {
  status?: 'done' | 'inProgress';
  content: string;
  description?: string;
  estimation?: number;
  labels?: ILabel[];
  priorityColor: string;
  difficulty?: string;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  status = 'inProgress',
  content,
  description,
  estimation,
  labels,
  priorityColor,
  difficulty,
}) => {
  return (
    <div className={styles.task}>
       <div className={cn(styles.header, styles.row)}>
         <PriorityLabel color={priorityColor} />

         <span className={styles.date}>
           22.08.22 
         </span>

        <Status className={styles.status} value="success" />
       </div>

       <div className={cn(styles.body, styles.row)}>
          <p className={cn(styles.content, styles.row)}>
            {content}
          </p>

          {labels && <LabelList labels={labels} limit={2} />}

          {description && <p className={cn(styles.description, 'text-one-line', styles.row)}>
            Могут возникнуть сложности в известном расположении
          </p>
          }
       </div>

       <div className={cn(styles.footer, styles.row)}>
         {difficulty && <span className={cn(styles.difficulty, 'text-one-line')}>
           {difficulty}
          </span>
          }

         <div className={cn(styles.meta, styles.row)}>
            {estimation && <span className={styles.estimation}>
              <TimerIcon />

              <span className={styles.estimationTime}>
                {estimation} ч.</span>
            </span>
            }

           <span className={styles.participants}>
             participants
           </span>
         </div>
       </div>
    </div>
  );
};

export default TaskCard;