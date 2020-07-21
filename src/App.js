import React, { Component } from "react";
import CardList from "./components/CardList";
import "./App.css";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    const pokemonList = await response.json();
    return pokemonList.results;
  } catch (error) {
    console.log(error);
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
    };
  }

  async componentDidMount() {
    const list = await fetchData();
    this.setState({
      pokemonList: list,
    });
  }

  render() {
    const { pokemonList } = this.state;

    console.log("esta es la pokemonlist que tengo", pokemonList);
    return (
      <div className="App">
        <CardList list={pokemonList} />
      </div>
    );
  }
}

export default App;
