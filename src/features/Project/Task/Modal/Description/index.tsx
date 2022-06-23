import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';

import Button from 'components/Button';

import { useAppDispatch } from 'store';
import { updateTask } from 'store/slices/project/thunks';
import styles from './styles.module.scss';

type Props = {
  className?: string;
};

const placeholder = 'Поле для подробного описания задачи...';

const ProjectTaskModalDescription: React.FC<Props> = ({className}) => {
  const dispatch = useAppDispatch();
  const {taskId} = useParams();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState('');

  const save = async () => {
    await dispatch(updateTask({taskId: taskId!, description})).unwrap();
    setEditing(false);
  };

  const startEditing = () => {
    setEditing(true);
    textareaRef.current?.focus();
  };

  const cancelEditing = () => {
    setDescription('');
    setEditing(false);
  };

  const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const renderEditingData = () => {
    return (
      <>
        <textarea
          className={styles.rawContent}
          id="task-modal-description"
          ref={textareaRef}
          placeholder={placeholder}
          value={description}
          onChange={onDescriptionChange}
        />

       <div className={styles.actions}>
          <Button variant='contained' onClick={save}>
            Сохранить
          </Button>
  
          <Button variant='text' onClick={cancelEditing}>
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
        {
          editing
          ? renderEditingData()
          : <div className={styles.parsedContent} onClick={startEditing}>
              {description.length > 0 ? <ReactMarkdown className={styles.markdown}>{description}</ReactMarkdown> : placeholder}
            </div>
        }
      </div>
    </div>
  );
};

export default ProjectTaskModalDescription;