import { ContactButton } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { LogOutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  return (
    <>
      <p>{userName.charAt(0).toUpperCase() + userName.slice(1)}</p>
      <ContactButton
        onClick={() =>
          dispatch(LogOutThunk()).then(() => {
            toast.info(`See you later!`);
          })
        }
      >
        Log Out
      </ContactButton>
    </>
  );
};
