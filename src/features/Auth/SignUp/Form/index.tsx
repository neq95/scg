import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';

import { register as sendRegisterRequest } from 'store/slices/auth/thunks';
import { useAppDispatch } from 'store';
import styles from './styles.module.css';

interface IValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const initialValues: IValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

interface IErrors {
  name: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  confirmedPassword: boolean;
}

const initialErrors: IErrors = {
  name: false,
  lastName: false,
  email: false,
  password: false,
  confirmedPassword: false,
};

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const register = async () => {
    setIsSubmitting(true);

    try {
      await dispatch(sendRegisterRequest(
        {
          name: values.name,
          surname: values.lastName,
          email: values.email,
          password: values.password,
        }
      ));


      navigate('/', {replace: true});
    } catch (error) {
      //TODO: handle error
      setIsSubmitting(false);
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const name = e.target.name;

    if (errors[name as keyof IErrors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onClear = (name: string) => {
    setValues({
      ...values,
      [name]: '',
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    register();
  };

  return (
    <div>
      <h1 className={styles.title}>
        ??????????????????????
      </h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          className={styles.input}
          id="input-name"
          value={values.name}
          type="text"
          name="name"
          error={errors.name}
          label="??????"
          placeholder="?????????????? ???????? ??????"
          errorText="????????????????"        onFocus={onFocus}
          onChange={onChange}
          onClear={() => onClear('name')}
        />

        <Input
          className={styles.input}
          id="input-lastname"
          value={values.lastName}
          type="text"
          name="lastName"
          error={errors.lastName}
          label="??????????????"
          placeholder="?????????????? ???????? ??????????????"
          errorText="????????????????"
          onFocus={onFocus}
          onChange={onChange}
        />

        <Input
          className={styles.input}
          id="input-email"
          value={values.email}
          type="email"
          name="email"
          error={errors.email}
          label="?????????????????????? ??????????"
          placeholder="name@company.com"
          errorText="????????????????"
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
          label="???????????? (???? 8 ????????????????)"
          placeholder="********"
          errorText="????????????????"
          onFocus={onFocus}
          onChange={onChange}
        />

        <Input
          className={styles.input}
          id="input-confirmed-password"
          value={values.confirmedPassword}
          type="password"
          name="confirmedPassword"
          error={errors.confirmedPassword}
          label="?????????????????? ????????????"
          placeholder="********"
          errorText="????????????????"
          onFocus={onFocus}
          onChange={onChange}
        />

        <Button
          className={styles.submit}
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          loading={isSubmitting}
        >
          ????????????????????????????????????
        </Button>
      </form> 
    </div>
  );
};

export default SignUpForm;