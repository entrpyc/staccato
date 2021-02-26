import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FluidLayout from "./components/FluidLayout"
import Header from "./components/Header"

import { ROUTE } from "./helpers/Dictionary"

function App() {
  return (
    <div className="main relative">
      <Header />
      <Router>
          <Switch>
            <Route exact path={ROUTE.FluidLayout}><FluidLayout /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
