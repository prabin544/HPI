import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Nav/Nav";
import HPI from "./components/HPI/HPIPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Navigation} />
        <Route path="/hpi" exact component={HPI} />
      </Switch>
    </Router>
  );
}
export default App;