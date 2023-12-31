import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Home = () => {
  return (
    <HomePageContainer>
      <Header />
    </HomePageContainer>
  );
};

export default Home;
