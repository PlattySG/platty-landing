import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedSwitch } from 'react-router-transition';
import { NavigationBar } from './components/Layout/NavigationBar/NavigationBar';
import { Footer } from './components/Layout/Footer';
import { HomeContainer } from './components/Home/HomeContainer';
import { ContactContainer } from './components/Contact/ContactContainer';
import { ComingSoonContainer } from './components/ComingSoon/ComingSoonContainer';
import Toast from './components/Layout/Toast/Toast';

const Styles = styled.div`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Router = () => (
  <Styles>
    <BrowserRouter>
      <NavigationBar />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route exact path="/">
          <HomeContainer />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <ContactContainer />
          <Footer />
        </Route>
        <Route exact path="/comingsoon">
          <ComingSoonContainer />
        </Route>
      </AnimatedSwitch>
    </BrowserRouter>
    <Toast />
  </Styles>
);
