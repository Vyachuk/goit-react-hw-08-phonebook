import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signInThunk, signUpThunk } from 'redux/auth/operations';
import { SignFormEl } from './SignForm.styled';
import PropTypes from 'prop-types';

export const SignForm = ({ elements, type }) => {
  const [value, setValue] = useState(elements);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (type === 'Register') {
      dispatch(signUpThunk(value))
        .unwrap()
        .then(e => {
          toast.info(`Glad to see you ${e.user.name}!`);
        })
        .catch(() => {
          toast.info(`This Email is already used!`);
        });
    }
    if (type === 'Login') {
      dispatch(signInThunk(value))
        .unwrap()
        .then(e => {
          toast.info(`Welcome back ${e.user.name}!`);
        })
        .catch(() => {
          toast.info(`Please enter Email and Password!`);
        });
    }
  };

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setValue(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <SignFormEl onSubmit={handleSubmit}>
      {Object.keys(elements).map(el => (
        <input
          key={el}
          type={el === 'name' ? 'text' : el}
          value={value[el]}
          name={el}
          placeholder={el.charAt(0).toUpperCase() + el.slice(1)}
          onChange={handleChangeInput}
        />
      ))}
      <button type="submit">{type}</button>
    </SignFormEl>
  );
};

SignForm.propTypes = {
  elements: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
};
