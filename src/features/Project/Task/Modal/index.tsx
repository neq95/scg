import ReactDOM from 'react-dom';

import ExpandableTextarea from 'components/Textarea/Expandable';

import styles from './styles.module.scss';

const root = document.getElementById('root');

const ProjectTaskModal = () => {
  const renderContent = () => {
    return (
      <div className={styles.modal}>
        <div className={styles.backdrop} />

        <div className={styles.content}>
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