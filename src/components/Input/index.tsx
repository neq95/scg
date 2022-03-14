import React from 'react';

import styles from './styles.module.css';
import CrossIcon from 'icons/CrossIcon';

interface propsInterface {
  type?: string;
  value: string | number;
  label?: string;
  placeholder?: string;
  errorText?: string;
  helperText?: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<propsInterface> = ({type = 'text', value, label, placeholder, errorText, helperText, error, onChange}) => {
  const message = error ? errorText : helperText;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
      </label>

      <div className={styles.input}>
        <form className={styles.inputForm}>
          <input
            className={styles.inputContent}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
          /> 
        </form>

        <button className={styles.clear}>
          <CrossIcon />
        </button>
      </div>

      {message && message.length > 0 && 
        <p className={styles.message}>
          {message}
        </p>
      }
    </div>
  )
}

export default Input; 