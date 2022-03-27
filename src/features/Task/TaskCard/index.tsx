import React from 'react';
import cn from 'classnames';

import PriorityLabel from 'components/Priority/PriorityLabel';
import Status from 'components/Status';
import Label from 'components/Label';
import TimerIcon from 'icons/TimerIcon';

import styles from './styles.module.css';

const TaskCard: React.FC = () => {
  return (
    <div className={styles.task}>
       <div className={cn(styles.header, styles.row)}>
         <PriorityLabel color="#E8B96A" />

         <span className={styles.date}>
           22.08.22
         </span>

        <Status className={styles.status} value="success" />
       </div>

       <div className={cn(styles.body, styles.row)}>
          <p className={cn(styles.content, styles.row)}>
            Сваггер - что это и как с ним работать? Погуглить, 
            пообщаться с Ромой, придумать инструмент по просмотру 
            для фронтов и для других персонажей
          </p>

          <div className={cn(styles.row, styles.labels)}>
            <Label className={styles.label} backgroundColor="#EDF9FF" color="#69D2FF">
              Очень преочень длинная метка
            </Label>

            <Label className={styles.label} backgroundColor="#FFEFEA" color="#FF6235">
              Обучение
            </Label>
          </div>

          <p className={cn(styles.description, 'text-one-line', styles.row)}>
            Могут возникнуть сложности в известном расположении
          </p>
       </div>

       <div className={cn(styles.footer, styles.row)}>
         <span className={styles.difficulty}>
           Нормально
         </span>

         <div className={cn(styles.meta, styles.row)}>
           <span className={styles.estimation}>
             <TimerIcon />

             <span className={styles.estimationTime}>48 ч.</span>
           </span>

           <span className={styles.participants}>
             participants
           </span>
         </div>
       </div>
    </div>
  );
};

export default TaskCard;