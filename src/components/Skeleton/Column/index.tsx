import React from 'react';

import BaseSkeleton from '../Base';

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
          <div>
            <BaseSkeleton />
          </div>
        )
      }
      <ul>
        {
          array.map((_, index) => {
            return (
              <li key={index}>
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