import React from 'react';

import BaseIcon from './BaseIcon';

import { iconPropsInterface } from 'models/icon';

const CrossIcon: React.FC<iconPropsInterface> = (props) => {
  return (
    <BaseIcon {...props}>
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
    </BaseIcon>
  )
}

export default CrossIcon;