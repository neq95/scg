import React, { useState } from 'react';

import ExpandableTextarea from 'components/Textarea/Expandable';
import Button from 'components/Button';

import { useAppDispatch } from 'store';
import { createTask } from 'store/slices/project';
import styles from './styles.module.css';

type Props = {
  priorityId: string;
};

const ProjectTaskAddition: React.FC<Props> = ({priorityId}) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createTask({priorityId, title}));
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <ExpandableTextarea
        className={styles.textarea}
        value={title}
        rows={3}
        maxLength={255}
        onChange={onChange}
      />

      <div className={styles.actions}>
        <Button variant="contained" type='submit'>
          Добавить задачу
        </Button>
      </div>
    </form>
  );
};

export default ProjectTaskAddition;