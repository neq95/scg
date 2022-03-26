import React from 'react';

interface propsInterface {
  title: string;
  description?: string;
}

const GuiSection : React.FC<propsInterface> = ({title, description, children}) => {
	return (
		<section>
			<h3>
				{title}
			</h3>

			{description && <p>{description}</p>}

			{children}
		</section>
	);
};

export default GuiSection;