import React from 'react';

interface propsInterface {
  type: string;
  value: string | number;
  label: string;
  errorText: string;
  helperText: string;
  error: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<propsInterface> = ({type = 'text', value, label, errorText, helperText, error, onChange}) => {
  const message = error ? errorText : helperText;

  return (
    <div>
      <label>
        {label}
      </label>

      <input value={value} type={type} onChange={onChange} /> 

      <p>
        {message}
      </p>
    </div>
  )
}

export default Input; 