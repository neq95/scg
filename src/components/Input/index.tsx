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
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
    onBlur,
    onChange,
    onClear,
  }) => {
    const [focused, setFocused] = useState(false);
    const [visible, setVisible] = useState(false);

  const isEmpty = value.length === 0;  
  const message = error ? errorText : helperText;
  const isPasswordInput = type === 'password';
  const resolvedType = type !== 'password' ? type : visible ? 'text' : 'password';
  const visibilityIcon = visible ? <EyeOffIcon size='small' /> : <EyeIcon size='small' />

  const onInputFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocused(true);
    onFocus?.(event);
  }

  const onInputBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocused(false);
    onBlur?.(event);
  }

  const onVisibilityButtonClick = () => {
    setVisible((previousState) => !previousState);
  }

  return (
    <div className={cn(className, styles.wrapper, {[styles.error]: error, [styles.empty]: isEmpty, [styles.focused]: focused})}>
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
          type={resolvedType}
          placeholder={placeholder}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={onChange}
        />

        {isPasswordInput ? <IconButton
          className={styles.visibility}
          size="small"
          tabIndex={-1}
          onClick={onVisibilityButtonClick}
        >
          {visibilityIcon}
        </IconButton>
        : <IconButton className={styles.clear} size="small" tabIndex={-1} onClick={onClear}>
            <CrossIcon size="small" />
          </IconButton>
        }
      </div>

      <p className={cn(styles.message, {active: message && message.length > 0})}>
        {message}
      </p>
    </div>
  )
}

export default Input; 