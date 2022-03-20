import React from 'react';

import CheckIcon from 'icons/CheckIcon';

import styles from './styles.module.css';

interface propsInterface {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<propsInterface> = (
  {
    label,
    disabled,
    checked,
    onChange,
  }
) => {
  return (
    <div className={styles.wrapper}>
      <label>
        <input
          className="visually-hidden"
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />

        <span className={styles.content}>
          <span className={styles.checkbox}>
            <CheckIcon className={styles.icon} size="extra-small" />
          </span>

          {label && <span className={styles.label}>{label}</span>}
        </span>
      </label>
    </div>
  )
}

export default Checkbox;