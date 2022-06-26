import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ExpandableTextarea from 'components/Textarea/Expandable';
import IconButton from 'components/IconButton';
import CrossIcon from 'icons/CrossIcon';
import ProjectTaskModalDescription from './Description';

import { RootState, useAppDispatch } from 'store';
import { getTaskById } from 'store/slices/project/selectors';
import {actions} from 'store/slices/task';
import {toProjectPage} from 'utils/routes';
import styles from './styles.module.scss';
import { getStatus, getTitle } from 'store/slices/task/selectors';
import { updateTitle } from 'store/slices/task/thunks';
import { Statuses } from 'models/Enums/Statuses';

const root = document.getElementById('root');

const ProjectTaskModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {projectId, taskId} = useParams();
  const task = useSelector((state: RootState) => getTaskById(state, taskId!));
  const status = useSelector(getStatus);
  const oldTitle = useSelector(getTitle);

  const [title, setTitle] = useState(task.title);

  useEffect(() => {
    dispatch(actions.initialized({id: task.id, title: task.title, description: task.description}));
  }, []);

  const close = () => {
    if (projectId) {
      navigate(toProjectPage(projectId));
    }
  };

  const onTitleBlur = () => {
    if (title.trim() === oldTitle) {
      return;
    }

    dispatch(updateTitle({title}));
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const renderContent = () => {
    return (
      <div className={styles.modal}>
        <div className={styles.backdrop} onClick={close} />

        <div className={styles.content}>
          {status === Statuses.succeeded && <>  
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

            <ProjectTaskModalDescription className={styles.description} />
          </>}
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