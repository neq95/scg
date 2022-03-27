import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

const TaskCard: React.FC = () => {
  return (
    <div className={styles.task}>
       <div className={cn(styles.header, styles.row)}>
         <span className={styles.date}>
           22.08.22
         </span>


       </div>

       <div className={cn(styles.body, styles.row)}>
          <p className={cn(styles.content, styles.row)}>
            Сваггер - что это и как с ним работать? Погуглить, 
            пообщаться с Ромой, придумать инструмент по просмотру 
            для фронтов и для других персонажей
          </p>

          <p className={styles.row}>
            метки
          </p>

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
             48 ч.
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