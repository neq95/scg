import React, { useState } from 'react';
import cn from 'classnames';

import ExpandableTextarea from 'components/Textarea/Expandable';
import Button from 'components/Button';

import styles from './styles.module.scss';

type Props = {
  className?: string;
};

const placeholder = 'Поле для подробного описания задачи...';

const ProjectTaskModalDescription: React.FC<Props> = ({className}) => {
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState('');

  const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onCancelEditing = () => {
    setDescription('');
    setEditing(false);
  };

  const renderEditingData = () => {
    return (
      <>
        <textarea
          className={styles.rawContent}
          id="task-modal-description"
          placeholder={placeholder}
          value={description}
          onChange={onDescriptionChange}
        />

       <div className={styles.actions}>
          <Button variant='contained'>
            Сохранить
          </Button>
  
          <Button variant='text' onClick={onCancelEditing}>
            Отмена
          </Button>
       </div>
      </>
    );
  };

  return (
    <div className={cn(styles.description, className)}>
      <span className={styles.label}>
        Описание
      </span>

      <div className={styles.content}>
        {!editing && <div className={styles.parsedContent} onClick={() => setEditing(true)}>
          {description || placeholder}
        </div>}
  
        {editing && renderEditingData()}
      </div>
    </div>
  );
};

export default ProjectTaskModalDescription;