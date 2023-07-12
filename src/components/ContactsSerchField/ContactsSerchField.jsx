import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { ContactWrap } from './ContactsSerchField.styled';

export const ContactsSerchField = () => {
  const dispatch = useDispatch();

  const onInfoChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <ContactWrap>
      <span>Find contacts by name</span>
      <input type="text" name="filter" onChange={onInfoChange} />
    </ContactWrap>
  );
};
