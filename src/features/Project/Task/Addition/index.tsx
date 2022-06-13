import React, { useEffect, useRef, useState } from 'react';

import ExpandableTextarea from 'components/Textarea/Expandable';
import Button from 'components/Button';

import { useAppDispatch } from 'store';
import { createTask } from 'store/slices/project/thunks';
import { taskCreatingFinished } from 'store/slices/project';
import styles from './styles.module.scss';
import IconButton from 'components/IconButton';
import CrossIcon from 'icons/CrossIcon';

type Props = {
  priorityId: string;
};

const ProjectTaskAddition: React.FC<Props> = ({priorityId}) => {
  const [additing, setAdditing] = useState(false);
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const titleInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleInput.current?.focus();
  }, []);

  const validate = () => {
    let isValid = true;

    if (title.trim().length === 0) {
      isValid = false;
    }

    return {isValid};
  };

  const sendCreateTaskRequest = async () => {
    setAdditing(true);

    try {
      await dispatch(createTask({priorityId, title})).unwrap();

      setTitle('');
    } catch {
      console.log('catch!'); //TODO: handle errors;
    } finally {
      setAdditing(false);
    }
  };

  const cancel = () => {
    dispatch(taskCreatingFinished());
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();

    if (event.shiftKey) {
      return;
    }

    const {isValid} = validate();
    if (isValid) {
      sendCreateTaskRequest();
    }
  };

  const handleEscape = () => {
    cancel();
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const keyMap = {
      'Enter': handleEnter,
      'Escape': handleEscape,
    } as Record<string, (event: React.KeyboardEvent<HTMLTextAreaElement>) => void>;

    keyMap[event.key]?.(event);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {isValid} = validate();
    if (isValid) {
      sendCreateTaskRequest();
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <ExpandableTextarea
        className={styles.textarea}
        ref={titleInput}
        value={title}
        rows={2}
        maxLength={127}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <div className={styles.actions}>
        <Button className={styles.action} variant="contained" type='submit' loading={additing}>
          Добавить задачу
        </Button>

        <IconButton className={styles.action} size='small' variant='contained' onClick={cancel}>
          <CrossIcon />
        </IconButton>
      </div>
    </form>
  );
};

export default ProjectTaskAddition;