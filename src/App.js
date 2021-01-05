import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalstyle";
import Header from "./containers/Header";
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './AppRouter'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <AppRouter />
      </PageWrapper>
    </Router>
  );
};

//styles

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10vh 9fr;
  height: 100vh;
`;

export default App;
