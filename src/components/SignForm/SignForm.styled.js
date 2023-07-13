import styled from 'styled-components';

export const SignFormEl = styled.form`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  min-width: 350px;
  input {
    font-size: 18px;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 2px solid lightblue;
    }
  }

  button {
    padding: 10px 0px;
    background-color: rgb(141, 202, 243);
    border-radius: 10px;
    font-size: 18px;
    border: none;

    &:hover {
      background-color: lightblue;
    }
  }
`;
