import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLooged } from 'redux/auth/selector';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLooged);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
