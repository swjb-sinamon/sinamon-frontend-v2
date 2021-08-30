import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PermissionRoute from './utils/PermissionRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPage from './pages/PrivacyPage';
import ToSPage from './pages/ToSPage';
import { AdminPageList, PageList } from './stores/PageList';
import UnauthorizedPage from './pages/error/UnauthorizedPage';

const RedirectLogin = (path: string) => <Redirect to={`/login?q=${path}`} />;

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {PageList.map((page) => (
          <PermissionRoute
            key={`router${page.name}`}
            path={page.path}
            success={() => page.component}
            failure={() => RedirectLogin(page.path)}
            exact
          />
        ))}

        {AdminPageList.map((page) => (
          <PermissionRoute
            key={`admin${page.name}`}
            path={page.path}
            success={() => page.component}
            failure={() => UnauthorizedPage({ prevPath: page.path })}
            permissions={page.permissions}
            exact
          />
        ))}

        <PermissionRoute path="/login" success={(q) => () => <Redirect to={q || '/'} />} failure={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/privacy" component={PrivacyPage} exact />
        <Route path="/tos" component={ToSPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
