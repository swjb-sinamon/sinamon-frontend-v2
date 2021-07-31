import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import querystring from 'querystring';
import { useProfile } from '../hooks/useProfile';

type Permission = 'admin' | 'teacher' | 'schoolunion';

interface PermissionRouteProps {
  path: string | string[];
  exact?: boolean;
  success: (q: string) => React.ComponentType<any>;
  failure: React.ComponentType<any>;
  permissions?: Permission[];
}

const PermissionRoute: React.FC<PermissionRouteProps> = ({
  path,
  exact,
  success: Success,
  failure: Failure,
  permissions
}) => {
  const profile = useProfile();
  const location = useLocation();
  const { q } = querystring.parse(location.search.replace('?', ''));

  const SuccessRoute = () => <Route exact={exact} path={path} component={Success(q as string)} />;
  const FailureRoute = () => <Route exact={exact} path={path} component={Failure} />;

  if (!profile) return <FailureRoute />;

  const myPermission: Permission[] = [];
  if (profile.permission.isAdmin) myPermission.push('admin');
  if (profile.permission.isTeacher) myPermission.push('teacher');
  if (profile.permission.isSchoolUnion) myPermission.push('schoolunion');
  const able = permissions ? myPermission.some((v) => permissions.includes(v)) : true;

  return able ? <SuccessRoute /> : <FailureRoute />;
};

export default PermissionRoute;
