import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLooged, selectRefresh } from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLooged);
  const isRefreshing = useSelector(selectRefresh);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
