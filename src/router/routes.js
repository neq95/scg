import { useRoutes } from 'react-router-dom';

import GuiPage from 'pages/Gui';
import LoginPage from 'pages/Auth/Login';

const Routes = () => {
  return useRoutes([
    {
      path: '/gui',
      element: <GuiPage />,
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ]);
}

export default Routes;