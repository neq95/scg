import LoginForm from 'features/Auth/Login/Form';

import styles from './styles.module.css';

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <p className={styles.logo}>SprinCanGile</p>

      <div className={styles.content}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;