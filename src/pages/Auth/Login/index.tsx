import cn from 'classnames';

import Container from 'layout/Container';
import LoginForm from 'features/Auth/Login/Form';
import Button from 'components/Button';
import ReceiptIcon from 'icons/Receipt';
import AssignmentIcon from 'icons/Assignment';
import TaskIcon from 'icons/Task';
import ChartIcon from 'icons/Chart';

import styles from './styles.module.css';

const LoginPage = () => {
  return (
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
            <LoginForm />
          </div>
  
          <p className={styles.tip}>
            Нет аккаунта? Создать его просто
          </p>
  
          <Button className={styles.registry} size="big">
            Регистрация
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default LoginPage;