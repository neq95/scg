import React, { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

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
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);

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
    
		// const {success} = validateForm();
		// if (success) {
		//   alert('success');
		// }
	};

	return (
		<div>
			<h1 className={styles.title}>
        Регистрация
			</h1>

			<form className={styles.form} onSubmit={onSubmit}>
				<Input
					className={styles.input}
					id="input-name"
					value={values.email}
					type="text"
					name="name"
					error={errors.email}
					label="Имя"
					placeholder="Укажите ваше имя"
					errorText="заглушка"        onFocus={onFocus}
					onChange={onChange}
					onClear={() => onClear('email')}
				/>

				<Input
					className={styles.input}
					id="input-lastname"
					value={values.password}
					type="text"
					name="lastname"
					error={errors.password}
					label="Фамилия"
					placeholder="Укажите вашу фамилию"
					errorText="заглушка"
					onFocus={onFocus}
					onChange={onChange}
				/>

				<Input
					className={styles.input}
					id="input-email"
					value={values.password}
					type="email"
					name="email"
					error={errors.password}
					label="Электронная почта"
					placeholder="name@company.com"
					errorText="заглушка"
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
					label="Пароль (от 8 символов)"
					placeholder="********"
					errorText="заглушка"
					onFocus={onFocus}
					onChange={onChange}
				/>

				<Input
					className={styles.input}
					id="input-confirmed-password"
					value={values.password}
					type="password"
					name="confirmedPassword"
					error={errors.password}
					label="Повторите пароль"
					placeholder="********"
					errorText="заглушка"
					onFocus={onFocus}
					onChange={onChange}
				/>

				<Button
					className={styles.submit}
					variant="contained"
					size="large"
					fullWidth
					type="submit"
				>
          Зарегистрироваться
				</Button>
			</form> 
		</div>
	);
};

export default SignUpForm;