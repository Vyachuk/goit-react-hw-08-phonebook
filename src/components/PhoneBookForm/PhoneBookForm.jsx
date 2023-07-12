import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchAddContact } from 'redux/operations';
import { Form, FormTitle } from './PhoneBookForm.styled';

export const PhoneBookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(fetchAddContact({ name, number }))
      .unwrap()
      .then(toast.info(`${name} was added to contacts!`));
    setName('');
    setNumber('');
  };
  return (
    <>
      <FormTitle>Phonebook</FormTitle>
      <Form>
        <span>Name:</span>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Number:</span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button onClick={onSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </>
  );
};
