import { useRoutes } from 'react-router-dom';

import GuiPage from 'pages/Gui';
import AuthPage from 'pages/Auth';
import LoginForm from 'features/Auth/Login/Form';
import SignUpForm from 'features/Auth/SignUp/Form';

const Routes = () => {
  return useRoutes([
    {
      path: '/gui',
      element: <GuiPage />,
    },
    {
      path: '/auth',
      element: <AuthPage />,
      children: [
        {
          path: 'login',
          element: <LoginForm />
        },
        {
          path: 'signup',
          element: <SignUpForm />
        }
      ]
    },
  ]);
}

export default Routes;