import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderWrap, Wrapper } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ContactApp } from './ContactApp/ContactApp';
import { SignForm } from './SignForm/SignForm';
import { selectRefresh } from 'redux/auth/selector';
import { refreshThunk } from 'redux/auth/operations';
import { Bars } from 'react-loader-spinner';
import { PrivateRoute } from 'hoc/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      {isRefresh ? (
        <LoaderWrap>
          <Bars
            height="80"
            width="80"
            color="rgb(141, 202, 243)"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h3>Loading...</h3>
        </LoaderWrap>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactApp />
                </PrivateRoute>
              }
            />
            <Route
              path="signup"
              element={
                <SignForm
                  type={'Register'}
                  elements={{ name: '', email: '', password: '' }}
                />
              }
            />
            <Route
              path="login"
              element={
                <SignForm
                  type={'Login'}
                  elements={{ email: '', password: '' }}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Wrapper>
  );
};
