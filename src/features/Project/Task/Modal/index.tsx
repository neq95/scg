import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ExpandableTextarea from 'components/Textarea/Expandable';
import IconButton from 'components/IconButton';
import CrossIcon from 'icons/CrossIcon';

import { RootState, useAppDispatch } from 'store';
import { getTaskById } from 'store/slices/project/selectors';
import { updateTask } from 'store/slices/project/thunks';
import {toProjectPage} from 'utils/routes';
import styles from './styles.module.scss';

const root = document.getElementById('root');

const ProjectTaskModal = () => {
  const {projectId, taskId} = useParams();
  const navigate = useNavigate();
  const task = useSelector((state: RootState) => getTaskById(state, taskId!));
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState('');

  const close = () => {
    if (projectId) {
      navigate(toProjectPage(projectId));
    }
  };

  const onTitleBlur = () => {
    dispatch(updateTask({taskId: taskId!, title, description: ''}));
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const renderContent = () => {
    return (
      <div className={styles.modal}>
        <div className={styles.backdrop} onClick={close} />

        <div className={styles.content}>
          <header className={styles.header}>
            <ExpandableTextarea
              className={styles.title}
              rows={1}
              value={title}
              placeholder="Заголовок задачи"
              maxLength={127}
              onBlur={onTitleBlur}
              onChange={onChange}
            />

            <IconButton
              className={styles.headerActions}
              size='small'
              variant='simple'
              onClick={close}
            >
              <CrossIcon />
            </IconButton>
          </header>

          <label htmlFor="task-modal-description">
            Описание
          </label>

          <ExpandableTextarea
            className={styles.description}
            id="task-modal-description"
            rows={1}
            placeholder="Поле для подробного описания задачи..."
            value={description}
            onChange={onDescriptionChange}
          />
        </div>
      </div>
    );
  };

  if (root) {
    return ReactDOM.createPortal(
      renderContent(),
      root
    );
  }

  return renderContent();
};

export default ProjectTaskModal;