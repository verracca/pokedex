import React, { Component } from "react";
import Background from "./Background";
import "./../App.css";
import Card from "./Card";

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props.match.params;
    return (
      <div className="app">
        <Background />
        <Card name={name} showDetails />
      </div>
    );
  }
}

export default CardDetail;
