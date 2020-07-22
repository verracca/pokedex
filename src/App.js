import React, { Component } from "react";
import Pokedex from "./components/Pokedex";
import CardDetail from "./components/CardDetail";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/pokedex/" exact component={Pokedex} />
          <Route path="/pokedex/pokemon/:name" exact component={CardDetail} />
          <Redirect from="/" to="/pokedex/" strict/>
        </Switch>
      </Router>
    );
  }
}

export default App;
