import React, { useState } from 'react';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';

import styles from './styles.module.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('future is now!')
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
          value={email}
          type="email"
          label="Электронная почта"
          placeholder="Введите вашу электронную почту"
          errorText="Такого адреса не существует"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          className={styles.input}
          id="input-password"
          value={password}
          type="email"
          label="Пароль"
          placeholder="Введите ваш пароль"
          errorText="Неправильный пароль" 
          onChange={(e) => setPassword(e.target.value)}
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

        <Button className={styles.submit} variant="contained" size="large" fullWidth>
          Войти
        </Button>
      </form>
    </div>
  )
}

export default LoginForm;