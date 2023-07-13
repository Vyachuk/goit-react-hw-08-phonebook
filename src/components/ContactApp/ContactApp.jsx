import { ContactList } from 'components/ContactList/ContactList';
import { ContactSection } from 'components/ContactSection/ContactSection';
import { ContactsSerchField } from 'components/ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectIsLooged } from 'redux/auth/selector';
import { selectError } from 'redux/selcetors';

export const ContactApp = () => {
  const isError = useSelector(selectError);
  const isLogged = useSelector(selectIsLooged);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged, navigate]);
  const errorData = () => {
    toast.error(isError);
    return <h4>'Something went wrong. Please try again!'</h4>;
  };
  return (
    <>
      <PhoneBookForm />
      <ContactSection>
        <ContactsSerchField />
        {isError ? errorData() : <ContactList />}
      </ContactSection>
    </>
  );
};
