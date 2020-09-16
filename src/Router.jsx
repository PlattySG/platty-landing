import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeContainer } from "./Home/HomeContainer";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
