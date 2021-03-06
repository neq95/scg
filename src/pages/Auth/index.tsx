import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import Container from 'layout/Container';
import Button from 'components/Button';
import ReceiptIcon from 'icons/Receipt';
import AssignmentIcon from 'icons/Assignment';
import TaskIcon from 'icons/Task';
import ChartIcon from 'icons/Chart';

import { getStatus } from 'store/slices/auth/selectors';
import { Statuses } from 'models/Enums/Statuses';
import styles from './styles.module.css';
import { useEffect } from 'react';

enum routes {
  login = '/auth/login',
  signup = '/auth/signup',
}

const routesConfig = {
	[routes.login]: {
		tipText: 'Нет аккаунта? Создать его просто',
		redirectHref: 'signup',
		redirectButtonText: 'Регистрация',
	},

	[routes.signup]: {
		tipText: 'Уже зарегистрированы? Войдите',
		redirectHref: 'login',
		redirectButtonText: 'Авторизация', 
	},
};

const AuthPage = () => {
	const status = useSelector(getStatus);
	const navigate = useNavigate();

	useEffect(() => {
		if (status === Statuses.succeeded) {
			navigate('/', {replace: true});
		}
	}, []);

	const {pathname} = useLocation();
	const routeConfig = routesConfig[pathname as keyof typeof routesConfig];

	return (
		<>
		{
			status === Statuses.failed && (
				<Container className={styles.container}>
					<div className={styles.login}>
						<div className={styles.info}>
							<p className={styles.logo}>
								SprinCanGile
							</p>

							<p className={styles.slogan}>
								Управление - это понятно!
							</p>

							<div className={styles.icons}>
								<span className={styles.icon}>
									<ReceiptIcon size="big" />
								</span>

								<span className={styles.icon}>
									<AssignmentIcon size="big" />
								</span>

								<span className={styles.icon}>
									<TaskIcon size="big" />
								</span>

								<span className={styles.icon}>
									<ChartIcon size="big" />
								</span>
							</div>

							<p className={styles.description}>
								Создавайте задачи, формируйте спринты, контролируйте процесс 
								и собирайте аналитику и всё это в одном месте и на всех платформах.
							</p>
						</div>

						<div className={styles.main}>
							<p className={cn(styles.logo, styles.mobile)}>SprinCanGile</p>
			
							<div className={styles.content}>
								<Outlet />
							</div>
			
							<p className={styles.tip}>
								{routeConfig.tipText}
							</p>
			
							<Button className={styles.registry} size="big" href={routeConfig.redirectHref}>
								{routeConfig.redirectButtonText}
							</Button>
						</div>
					</div>
				</Container>
			)
		}
		</>
	);
};

export default AuthPage;