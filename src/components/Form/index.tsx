import React from 'react';

interface propsInterface {
  className?: string;
}

const Form: React.FC<propsInterface> = ({className, children}) => {
	return (
		<form className={className} >
			{children}
		</form>
	);
};

export default Form;