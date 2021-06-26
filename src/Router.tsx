import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PermissionRoute from './utils/PermissionRoute';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import ToSPage from './pages/ToSPage';

const RedirectLogin = () => <Redirect to="/login" />;

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PermissionRoute path="/" success={MainPage} failure={RedirectLogin} exact />
        <PermissionRoute path="/login" success={() => <Redirect to="/" />} failure={LoginPage} exact />
        <Route path="/privacy" component={PrivacyPage} exact />
        <Route path="/tos" component={ToSPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
