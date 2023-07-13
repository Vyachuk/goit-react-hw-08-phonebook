import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;
