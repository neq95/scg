import React, { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>
        Авторизация
      </h1>

      <form>
        <Input
          id="input-email"
          value={email}
          type="email"
          label="Электронная почта"
          placeholder="Введите вашу электронную почту"
          errorText="Такого адреса не существует"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="input-password"
          value={password}
          type="email"
          label="Пароль"
          placeholder="Введите ваш пароль"
          errorText="Неправильный пароль" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>

        </div>

        <Button variant="contained" size="large" fullWidth>
          Войти
        </Button>
      </form>
    </div>
  )
}

export default LoginForm;