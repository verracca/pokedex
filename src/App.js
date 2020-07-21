import React, { Component } from "react";

import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
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
      searchfield: "",
    };
  }

  async componentDidMount() {
    const list = await fetchData();
    this.setState({
      pokemonList: list,
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
  
    const filteredPokemonName = this.state.pokemonList.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <SearchBox searchChange={this.onSearchChange} />
        <CardList list={filteredPokemonName} />
      </div>
    );
  }
}

export default App;
