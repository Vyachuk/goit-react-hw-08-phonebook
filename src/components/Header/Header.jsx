import { useSelector } from 'react-redux';
import { selectIsLooged } from 'redux/auth/selector';
import { AuthNav } from './AuthNav';
import { HeaderWrap } from './Header.styled';
import { UserMenu } from './UserMenu';

export const Header = () => {
  const isLogged = useSelector(selectIsLooged);
  return (
    <HeaderWrap>
      {isLogged && <UserMenu />}
      {!isLogged && <AuthNav />}
    </HeaderWrap>
  );
};
