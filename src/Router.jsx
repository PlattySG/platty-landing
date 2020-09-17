import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationBar } from './components/Layout/NavigationBar/NavigationBar';
import { Footer } from './components/Layout/Footer';
import { HomeContainer } from './components/Home/HomeContainer';

const Styles = styled.div`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Router = () => (
  <Styles>
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </BrowserRouter>
    <Footer />
  </Styles>
);
