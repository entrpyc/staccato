import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Admin from "./components/Admin"
import Header from "./components/Header"

import { ROUTE } from "./helpers/Dictionary"

import "./styles/staccato/main.scss"

function App() {
  return (
    <div className="main relative">
      <Header />
      <Router>
          <Switch>
            <Route exact path={ROUTE.ADMIN}><Admin /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
