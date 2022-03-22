import React, { useState } from 'react';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';

import { buildValidateText, buildValidateEmail } from 'utils/validation';
import styles from './styles.module.css';


interface IValidationField {
  validate: (value: string) => boolean;
  errorText: string;
}

interface IValidationConfig {
  email: IValidationField,
  password: IValidationField,
} 

const validationConfig: IValidationConfig = {
  email: {
    validate: buildValidateText(4),
    errorText: 'Неверный почтовый адрес',
  },

  password: {
    validate: buildValidateEmail(),
    errorText: 'Неверный пароль',
  }
}

const initialValues: Record<string, string> = {
  email: '',
  password: '',
}

interface IErrors {
  [key: string]: boolean;
}

const initialErrors: IErrors = {
  email: false,
  password: false,
}

const LoginForm: React.FC = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<IErrors>(initialErrors);
  const [remember, setRemember] = useState(false);

  const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const name = e.target.name;

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      })
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  const onClear = (name: string) => {
    setValues({
      ...values,
      [name]: '',
    })
  }

  const validateForm = () => {
    const newErrors: IErrors = {};
    Object.entries(values).forEach(([key, value]) => {
      const isValid = (validationConfig)[key as keyof IValidationConfig].validate(value);
      if (!isValid) {
        newErrors[key] = true;
      }
    });

    const isSuccess = Object.keys(newErrors).length === 0;
    if (!isSuccess) {
      setErrors(newErrors);
    }

    return {success: isSuccess};
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const {success} = validateForm();
    if (success) {
      alert('success');
    }
  }

  return (
    <div>
      <h1 className={styles.title}>
        Авторизация
      </h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          className={styles.input}
          id="input-email"
          value={values.email}
          type="email"
          name="email"
          error={errors.email}
          label="Электронная почта"
          placeholder="Введите вашу электронную почту"
          errorText={validationConfig.email.errorText}
          onFocus={onFocus}
          onChange={onChange}
          onClear={() => onClear('email')}
        />

        <Input
          className={styles.input}
          id="input-password"
          value={values.password}
          type="password"
          name="password"
          error={errors.password}
          label="Пароль"
          placeholder="Введите ваш пароль"
          errorText={validationConfig.password.errorText}
          onFocus={onFocus}
          onChange={onChange}
        />

        <div className={styles.helpers}>
          <Checkbox
            checked={remember}
            label="Запомнить"
            onChange={(e) => setRemember(e.target.checked)}
          />

          <Button size="small">
            Не помню
          </Button>
        </div>

        <Button
          className={styles.submit}
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Войти
        </Button>
      </form> 
    </div>
  )
}

export default LoginForm;