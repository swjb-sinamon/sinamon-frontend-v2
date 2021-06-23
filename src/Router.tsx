import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PermissionRoute from './utils/PermissionRoute';
import LoginPage from './pages/LoginPage';

const RedirectLogin = () => <Redirect to="/login" />;

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PermissionRoute path="/" success={MainPage} failure={RedirectLogin} exact />
        <PermissionRoute path="/login" success={() => <Redirect to="/" />} failure={LoginPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
