import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';

import Button from 'components/Button';

import { useAppDispatch } from 'store';
import styles from './styles.module.scss';
import { updateDescription } from 'store/slices/task/thunks';
import { useSelector } from 'react-redux';
import { getDescription } from 'store/slices/task/selectors';

type Props = {
  className?: string;
};

const placeholder = 'Поле для подробного описания задачи...';

const ProjectTaskModalDescription: React.FC<Props> = ({className}) => {
  const dispatch = useAppDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const description = useSelector(getDescription);

  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editing) {
      textareaRef.current?.focus();
    }
  }, [editing]);

  const save = async () => {
    setIsSaving(true);

    await dispatch(updateDescription({description: newDescription})).unwrap();

    setIsSaving(false);
    setEditing(false);
  };

  const startEditing = () => {
    setNewDescription(description ?? '');
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') {
      textareaRef.current?.blur();
    }
  };

  const renderEditingData = () => {
    return (
      <>
        <textarea
          className={styles.rawContent}
          id="task-modal-description"
          ref={textareaRef}
          placeholder={placeholder}
          value={newDescription}
          onKeyDown={onKeyDown}
          onChange={onDescriptionChange}
        />

       <div className={styles.actions}>
          <Button variant='contained' disabled={isSaving} loading={isSaving} onClick={save}>
            Сохранить
          </Button>
  
          <Button variant='text' disabled={isSaving} onClick={cancelEditing}>
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
              {description && description.length > 0 ? <ReactMarkdown className={styles.markdown}>{description}</ReactMarkdown> : placeholder}
            </div>
        }
      </div>
    </div>
  );
};

export default ProjectTaskModalDescription;