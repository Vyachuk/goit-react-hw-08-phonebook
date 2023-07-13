import { ContactButton } from 'components/ContactList/ContactList.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOutThunk } from 'redux/auth/operations';
import { selectIsLooged, selectUser } from 'redux/auth/selector';
import { HeaderWrap, Navigation } from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const isLogged = useSelector(selectIsLooged);
  return (
    <HeaderWrap>
      {isLogged && (
        <p>{userName.charAt(0).toUpperCase() + userName.slice(1)}</p>
      )}
      {isLogged && (
        <ContactButton
          onClick={() =>
            dispatch(LogOutThunk())
              .unwrap()
              .then(() => navigate('login'))
          }
        >
          Log Out
        </ContactButton>
      )}
      {!isLogged && (
        <Navigation>
          <ContactButton onClick={() => navigate('signup')}>
            Register
          </ContactButton>
          <ContactButton onClick={() => navigate('login')}>Login</ContactButton>
          {/* {isLogged && (
          <ContactButton onClick={() => navigate('contacts')}>
            Contacts
          </ContactButton>
        )} */}
        </Navigation>
      )}
    </HeaderWrap>
  );
};
