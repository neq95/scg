import React from 'react';
import cn from 'classnames';

import IconButton from 'components/IconButton';

import styles from './styles.module.css';
import CrossIcon from 'icons/CrossIcon';

interface propsInterface {
  className?: string;
  id: string;
  type?: string;
  value: string;
  label?: string;
  placeholder?: string;
  errorText?: string;
  helperText?: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<propsInterface> = (
  {
    className,
    id,
    type = 'text',
    value,
    label,
    placeholder,
    errorText,
    helperText,
    error,
    onChange
  }) => {
  const isEmpty = value.length === 0;  
  const message = error ? errorText : helperText;

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
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />

        <IconButton className={styles.clear} size="small">
          <CrossIcon size="small" />
        </IconButton>
      </div>

      
      <p className={cn(styles.message, {active: message && message.length > 0})}>
        {message}
      </p>
    </div>
  )
}

export default Input; 