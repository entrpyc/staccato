import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FluidLayout from "./components/FluidLayout"
import FlexBox from "./test/FlexBox"
import ColGrid from "./test/ColGrid"
import Header from "./components/Header"

import { ROUTE } from "./helpers/Dictionary"

function App() {
  return (
    <div className="main relative">
      <Header />
      <Router>
          <Switch>
            <Route exact path={ROUTE.FluidLayout}><FluidLayout /></Route>
            <Route exact path={ROUTE.TEST.ColGrid}><ColGrid /></Route>
            <Route exact path={ROUTE.TEST.FlexBox}><FlexBox /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
