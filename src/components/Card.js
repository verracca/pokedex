import React, { Component } from "react";
import "./../App.css";

const fetchPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const pokemon = await response.json();

    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

const fetchPokemonEvolution = async (url) => {
  try {
    const response = await fetch(url);
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
    const pokemonEvol = await fetchPokemonEvolution(pokemon.species.url);
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
      <div className="card">
        <div className="cardHeader">
          <img
            className="pokeIMG"
            alt="pokemon"
            src={pokemon.sprites.front_default}
          />
          <div className="pokeID">ID / {pokemon.id}</div>
        </div>
        <div className="CardContent">
          <p className="pokeName">{pokemon.name}</p>

          <div className="pokeTypeContainer">
            {pokemon.types.map((item) => (
              <div className="pokeType" key={item.slot}>
                {item.type.name}
              </div>
            ))}
          </div>
          <div className="verticalLine">
            {hasEvol ? (
              <div className="evolution">
                Evoluciona de:
                <p className="evolPokemon">{pokemonEvolution.evolves_from_species.name}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
