import React, { useState } from 'react';
import cn from 'classnames';

import IconButton from 'components/IconButton';

import styles from './styles.module.css';
import CrossIcon from 'icons/CrossIcon';
import EyeIcon from 'icons/EyeIcon';
import EyeOffIcon from 'icons/EyeOffIcon';

interface propsInterface {
  className?: string;
  id: string;
  name?: string,
  type?: string;
  value: string;
  label?: string;
  placeholder?: string;
  errorText?: string;
  helperText?: string;
  error?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<propsInterface> = (
  {
    className,
    id,
    name,
    type = 'text',
    value,
    label,
    placeholder,
    errorText,
    helperText,
    error,
    onFocus,
    onChange
  }) => {
    const [visible, setVisible] = useState(false);

  const isEmpty = value.length === 0;  
  const message = error ? errorText : helperText;
  const visibilityIcon = visible ? <EyeOffIcon size='small' /> : <EyeIcon size='small' />

  const onVisibilityButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setVisible((previousState) => !previousState);
  }

  return (
    <div className={cn(className, styles.wrapper, {[styles.error]: error, [styles.empty]: isEmpty})}>
      {label && <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      }

      <div className={styles.input}>
        <input
          className={styles.inputContent}
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          onChange={onChange}
        />

        <IconButton
          className={styles.clear}
          size="small"
          onClick={onVisibilityButtonClick}
        >
          {visibilityIcon}
        </IconButton>
      </div>

      
      <p className={cn(styles.message, {active: message && message.length > 0})}>
        {message}
      </p>
    </div>
  )
}

export default Input; 