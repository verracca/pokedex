import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Background from "./Background";
import Scroll from "./Scroll";
import { fetchData } from "../utils/utils";
import "./../App.css";

class Pokedex extends Component {
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
      <div className="app">
        <Background />
        <div className="container">
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList list={filteredPokemonName} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default Pokedex;
