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

const validationConfig: {[key: string]: IValidationField} = {
  email: {
    validate: buildValidateText(4),
    errorText: 'Неверный почтовый адрес',
  },

  password: {
    validate: buildValidateEmail(),
    errorText: 'Неверный пароль',
  }
}

const initialValues = {
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

  const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
  obj[key];

  const validateForm = () => {
    const newErrors: IErrors = {};
    Object.entries(values).forEach(([key, value]) => {
      const isValid = getKeyValue(validationConfig)(key).validate(value);
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
          errorText="Такого адреса не существует"
          onFocus={onFocus}
          onChange={onChange}
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
          errorText="Пароль должен состоять минимум и 8 символов, содержать как минимум 1 прописную букву, 1 строчную букву и 1 цифру"
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