import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PermissionRoute from './utils/PermissionRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPage from './pages/PrivacyPage';
import ToSPage from './pages/ToSPage';
import MyPage from './pages/MyPage';

const RedirectLogin = (path: string) => <Redirect to={`/login?q=${path}`} />;

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PermissionRoute path="/" success={() => MainPage} failure={() => RedirectLogin('/')} exact />
        <PermissionRoute path="/me" success={() => MyPage} failure={() => RedirectLogin('/me')} exact />
        <PermissionRoute path="/login" success={(q) => () => <Redirect to={q || '/'} />} failure={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/privacy" component={PrivacyPage} exact />
        <Route path="/tos" component={ToSPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
