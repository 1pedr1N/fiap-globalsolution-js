import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../../dados.json';
import { useNavigate } from 'react-router-dom';
const LoginContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const Login = () => {

 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const history = useNavigate();
  const handleLogin = () => {
    const user = data.find((user) => user.email === username && user.senha === password);
    console.log(user);
    if (user) {
      setError('');
      sessionStorage.setItem('user', JSON.stringify(user));
        history('/home');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };


  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm>
        <Label>
          Usuário:
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          Senha:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button type="button" onClick={handleLogin}>
          Entrar
        </Button>
      </LoginForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginContainer>
  );
};

export default Login;
