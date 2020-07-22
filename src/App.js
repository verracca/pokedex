import React, { Component } from "react";
import Pokedex from "./components/Pokedex";
import CardDetail from "./components/CardDetail"
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Pokedex}/>
          <Route path="/pokemon/" exact component={Pokedex}/>
          <Route path="/pokemon/:name" exact component={CardDetail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
