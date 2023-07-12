import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { fetchAllContacts } from 'redux/operations';
import { selectError } from 'redux/selcetors';
import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactSection } from './ContactSection/ContactSection';
import { ContactsSerchField } from './ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  const errorData = () => {
    toast.error(isError);
    return <h4>'Something went wrong. Please try again!'</h4>;
  };

  return (
    <Wrapper>
      <PhoneBookForm />
      <ContactSection>
        <ContactsSerchField />
        {isError ? errorData() : <ContactList />}
      </ContactSection>
      <ToastContainer />
    </Wrapper>
  );
};
