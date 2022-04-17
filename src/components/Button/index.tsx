import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import CircleDotsLoader from 'components/Loader/Circle/Dots';

import { LoaderColors } from 'models/Enums/Loader';
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
	loading?: boolean;
	tabIndex?: number;
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
	loading,
	tabIndex = 0,
	onClick,
}) => {
	const Component: any = href ? Link : 'button';
	const resolvedType = href ? null: type;
	const loaderColor = disabled ? LoaderColors.primary : LoaderColors.white;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (loading) {
			return;
		}

		onClick?.(e);
	};

	return (
		<Component
			className=
				{
					cn(className, styles.button, styles[variant], styles[size], {[styles.fullWidth]: fullWidth, [styles.loading]: loading})
				}
			type={resolvedType}
			to={href}
			disabled={disabled}
			tabIndex={tabIndex}
			onClick={handleClick}
		>
			<div className={styles.content}>
				{children}
			</div>

			<CircleDotsLoader className={styles.loader}  size={size} color={loaderColor} />
		</Component>
	);
};

export default Button;