import React from 'react';

interface propsInterface {
  title: string,
  description?: string,
}

const GuiSectionBlock : React.FC<propsInterface> = ({title, description, children}) => {
	return (
		<article>
			<p>
				{title}
			</p>

			{description && <p>{description}</p>}

			{children}
		</article>
	);
};

export default GuiSectionBlock;