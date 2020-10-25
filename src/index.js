import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './state/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/paper-dashboard.scss?v=1.2.0';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import AdminLayout from 'layouts/Admin.js';
import HomeLayout from 'layouts/HomeLayout.js';
import StaffLayout from 'layouts/StaffLayout.js';
import LoginNew from 'views/LoginNew';
import PrivateRoute from './routing/PrivateRoute';
import Register from './views/RegisterLay';

const hist = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={hist}>
			<Switch>
				<Route exact path="/" render={(props) => <HomeLayout {...props} />} />
				<Route path="/register" render={(props) => <Register {...props} />} />
				<Route path="/login" render={(props) => <LoginNew {...props} />} />
				<Route path="/app" render={(props) => <HomeLayout {...props} />} />
				<PrivateRoute path="/admin" component={AdminLayout} />
				<PrivateRoute path="/staff" component={StaffLayout} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
