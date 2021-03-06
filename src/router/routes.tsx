import { useRoutes } from 'react-router-dom';

import GuiPage from 'pages/Gui';
import App from 'App';
import AuthGuard from 'features/Guards/Auth';
import AuthPage from 'pages/Auth';
import LoginForm from 'features/Auth/Login/Form';
import SignUpForm from 'features/Auth/SignUp/Form';
import ProjectListPage from 'pages/Project/List';
import ProjectDetailPage from 'pages/Project/Detail';

const Routes = () => {
	return useRoutes([
    {
      path: '/gui',
      element: <GuiPage />,
    },
    {
      element: <App />,
      children: [
        {
          path: '/auth',
          element: <AuthPage />,
          children: [
            {
              path: 'login',
              element: <LoginForm />,
            },
            {
              path: 'signup',
              element: <SignUpForm />,
            },
          ],
        },
        {
          element: <AuthGuard />,
          children: [
            {
              path: '/',
              element: <ProjectListPage />,
            },
            {
              path: '/project',
              children: [
                {
                  path: ':projectId',
                  element: <ProjectDetailPage />,
                },
              ],
            },
          ]
        }
      ]
    }
  ]);
};

export default Routes;