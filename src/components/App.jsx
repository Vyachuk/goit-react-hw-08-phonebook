import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import { Wrapper } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ContactApp } from './ContactApp/ContactApp';
import { SignForm } from './SignForm/SignForm';
import { selectIsLooged } from 'redux/auth/selector';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLooged);
  useEffect(() => {
    if (isLogged) {
      dispatch(fetchAllContacts());
    }
  }, [dispatch, isLogged]);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<ContactApp />} />
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
              <SignForm type={'Login'} elements={{ email: '', password: '' }} />
            }
          />
        </Route>
      </Routes>
    </Wrapper>
  );
};
