import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchDeleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selcetors';
import {
  ContactButton,
  ContactHumanList,
  ContactItem,
} from './ContactList.styled';

const getContactsFiltered = (contactsArray, filterData) => {
  return contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(filterData.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = getContactsFiltered(contacts, filter);
  return (
    <ContactHumanList>
      {filteredData.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactButton
            type="button"
            onClick={() =>
              dispatch(fetchDeleteContact(contact.id))
                .unwrap()
                .then(toast.info(`${contact.name} was removed!`))
            }
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactHumanList>
  );
};
