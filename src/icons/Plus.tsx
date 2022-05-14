import React from 'react';

import BaseIcon from './BaseIcon';

import { iconPropsInterface } from 'models/icon';

const PlusIcon: React.FC<iconPropsInterface> = (props) => {
	return (
		<BaseIcon {...props}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
		</BaseIcon>
	);
};

export default PlusIcon;