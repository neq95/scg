import React from 'react';

import BaseIcon from './BaseIcon';

import { iconPropsInterface } from 'models/icon';

const FilterIcon: React.FC<iconPropsInterface> = (props) => {
	return (
		<BaseIcon {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
		</BaseIcon>
	);
};

export default FilterIcon;