import React from 'react';

import BaseSkeleton from '../Base';

import styles from './styles.module.css';

type Props = {
  withHeader?: boolean;
  elementsAmount?: number;
  renderElement: () => JSX.Element;
}

const SkeletonColumn: React.FC<Props> = ({withHeader = false, elementsAmount = 1, renderElement}) => {
  const array = Array.from(Array(elementsAmount));



  return (
    <>
      {
        withHeader && (
          <div className={styles.header}>
            <BaseSkeleton className={styles.title} />
          </div>
        )
      }
      <ul className={styles.list}>
        {
          array.map((_, index) => {
            return (
              <li key={index} className={styles.element}>
                { renderElement() }
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export default SkeletonColumn;