import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'router/routes';
import {Provider} from 'react-redux';

import store from 'store';


import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
