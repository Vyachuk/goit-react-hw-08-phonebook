import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  gap: 10px;

  margin: 0 auto;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 350px;
  padding-top: 15px;
  padding-bottom: 10px;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  padding: 3px 30px;
  background-color: rgb(141, 202, 243);
  border-radius: 10px;
  border: none;
  &.active {
    color: white;
    font-weight: 600;
  }
  &:hover {
    background-color: lightblue;
  }
`;
