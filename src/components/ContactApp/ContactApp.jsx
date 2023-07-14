import { ContactList } from 'components/ContactList/ContactList';
import { ContactSection } from 'components/ContactSection/ContactSection';
import { ContactsSerchField } from 'components/ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchAllContacts } from 'redux/operations';
import { selectError } from 'redux/selcetors';

export const ContactApp = () => {
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
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
