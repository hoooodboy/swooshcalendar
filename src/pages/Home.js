import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Template from '../components/Template';
import Header from '../components/Header';
import Shoes from '../home-components/Shoes';
import Footer from '../home-components/Footer';

const GlobalStyle = createGlobalStyle`
  body{
    background: lightgray;
  }
`;

const Home =({children}) => {

  return (
    <>
      <GlobalStyle />
      <Template>
        <Header>
        </Header>
        <Shoes></Shoes>
        <Footer></Footer>
      </Template>
    </>
  );
}

export default Home;