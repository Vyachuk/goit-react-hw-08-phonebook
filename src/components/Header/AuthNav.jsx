import { Navigation, StyledLink } from './Header.styled';

export const AuthNav = () => {
  return (
    <Navigation>
      <StyledLink to={'/'}>Register</StyledLink>
      <StyledLink to={'login'}>Login</StyledLink>
    </Navigation>
  );
};
