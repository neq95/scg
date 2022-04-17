import React, { useState } from 'react';
import { useLocation, useNavigate, Location as ILocation } from 'react-router-dom';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';

import { useAppDispatch } from 'store';
import { buildValidateText } from 'utils/validation';
import styles from './styles.module.css';
import {login as sendLoginRequest} from 'store/slices/auth';

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
		validate: buildValidateText(3),
		errorText: 'Неверный пароль',
	}
};

interface IValues {
	email: string;
	password: string;
}

const initialValues: IValues = {
	email: '',
	password: '',
};

interface IErrors {
  [key: string]: boolean;
}

const initialErrors: IErrors = {
	email: false,
	password: false,
};

const LoginForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	const [remember, setRemember] = useState(false);

	const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const name = e.target.name;

		if (errors[name]) {
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
	};

	const login = async () => {
		setIsSubmitting(true);

		const locationState = location.state as {from: ILocation} | undefined;
		const redirectRoute = locationState?.from.pathname ?? '/';

		try {
			await dispatch(
				sendLoginRequest({email: values.email, password: values.password})
			).unwrap();
	
			navigate(redirectRoute, {replace: true});
		} catch (error) {
			//TODO: handle error
			console.log(error);
			setIsSubmitting(false);
		}
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isSubmitting) {
			return;
		}
    
		const {success} = validateForm();
		if (success) {
			login();
		}
	};

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
					loading={isSubmitting}
				>
          Войти
				</Button>
			</form> 
		</div>
	);
};

export default LoginForm;