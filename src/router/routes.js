import { useRoutes } from 'react-router-dom';

import GuiPage from 'pages/Gui';

import AuthGuard from 'features/Guards/Auth';
import AuthPage from 'pages/Auth';
import LoginForm from 'features/Auth/Login/Form';
import SignUpForm from 'features/Auth/SignUp/Form';
import ProjectListPage from 'pages/Project/List';

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
		{
			path: '/',
			element: <AuthGuard><ProjectListPage /></AuthGuard>
		}
	]);
};

export default Routes;