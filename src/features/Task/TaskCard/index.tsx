import React from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';

import PriorityLabel from 'components/Priority/PriorityLabel';
import Status from 'components/Status';
import LabelList from 'components/Label/List';
import TimerIcon from 'icons/TimerIcon';

import styles from './styles.module.css';
import {ILabel} from 'models/Label';
import {StatusEnum} from 'models/Status';

/**
 * TODO:
 * 1. получать дату пропсами (видимо, timestamp и приобразовывать к дате)
 * 2. изменить стили статуса. Нужно, чтобы только статусы в состоянии IDLE меняли стили
 * при ховере и фокусе
 * 3. Сделать fix size вид отображения
 */

interface ITaskCardProps {
  className?: string;
  status?: StatusEnum;
  title: string;
  description?: string;
  estimation?: number;
  labels?: ILabel[];
  priorityColor: string;
  difficulty?: string;
  fixedSize?: boolean;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  className,
  status = StatusEnum.IDLE,
  title,
  description,
  estimation,
  labels,
  priorityColor,
  difficulty,
  fixedSize,
}) => {
  return (
    <Link className={cn(className, styles.task, {[styles.fixed]: fixedSize})} to="/">
       <div className={cn(styles.header, styles.row)}>
         <PriorityLabel color={priorityColor} />

         <span className={styles.date}>
           22.08.22 
         </span>

        <Status className={styles.status} value={status} />
       </div>

       <div className={cn(styles.body, styles.row)}>
          <p className={cn(styles.title, styles.row)}>
            {title}
          </p>

          {labels && <LabelList className={styles.row} labels={labels} limit={2} />}

          {description && <p className={cn(styles.description, 'text-one-line', styles.row)}>
            {description}
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
    </Link>
  );
};

export default TaskCard;