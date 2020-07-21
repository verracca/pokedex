import React, { Component } from "react";

const fetchPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const pokemon = await response.json();

    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

const fetchPokemonEvolution = async (id) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const pokemonEvol = await response.json();

    return pokemonEvol;
  } catch (error) {
    console.log(error);
  }
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const pokemon = await fetchPokemonData(this.props.url);
    const pokemonEvol = await fetchPokemonEvolution(pokemon.id);
    this.setState({
      pokemon: pokemon,
      pokemonEvolution: pokemonEvol,
    });
  }

  render() {
    if (!this.state.pokemon) {
      return <div></div>;
    }
    const { pokemon, pokemonEvolution } = this.state;

    const hasEvol = pokemonEvolution.evolves_from_species;

    return (
      <div>
        <img alt="pokemon" src={pokemon.sprites.front_default} />
        <div>ID {pokemon.id}</div>
        <p>{pokemon.name}</p>
        <div>
          {pokemon.types.map((item) => (
            <div key={item.slot}>{item.type.name}</div>
          ))}
        </div>
        <div>
          {hasEvol ? (
            <div>
              Evoluciona de {pokemonEvolution.evolves_from_species.name}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
