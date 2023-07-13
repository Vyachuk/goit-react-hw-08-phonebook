import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLooged } from 'redux/auth/selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(selectIsLooged);

  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
