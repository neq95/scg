import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

interface propsInterface {
  className?: string;
  variant?: 'contained' | 'text';
  startIcon?: React.FC;
  endIcon?: React.FC;
  size?: 'small' | 'medium' | 'big' | 'large';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button : React.FC<propsInterface> = ({
	className,
	variant = 'text',
	startIcon,
	endIcon,
	size = 'small',
	fullWidth,
	type = 'button',
	href,
	disabled,
	children,
	onClick,
}) => {
	const Component: any = href ? Link : 'button';
	const resolvedType = href ? null: type;

	return (
		<Component
			className=
				{
					cn(className, styles.button, styles[variant], styles[size], {[styles.fullWidth]: fullWidth})
				}
			type={resolvedType}
			to={href}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Component>
	);
};

export default Button;