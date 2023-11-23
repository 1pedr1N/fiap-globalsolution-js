import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const HeaderContainer = styled.div`
  background: #333;
  color: #fff;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const WelcomeMessage = styled.div`
  font-size: 18px;
`;

const UserInfo = styled.div`
  font-size: 14px;
`;

const LogoutButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const Header = () => {
  const userData = sessionStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;
  const history = useNavigate();
  const handleLogout = () => {
  try{
    sessionStorage.removeItem('user');
    history('/');
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <HeaderContainer>
      <h2>Meu Aplicativo</h2>
      {user && (
        <>
          <div>
            <WelcomeMessage>Bem-vindo, {user.nome}!</WelcomeMessage>
            <UserInfo>Email: {user.email}</UserInfo>
          </div>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
