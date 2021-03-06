import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonData, fetchPokemonEvolution } from "../utils/utils";
import "./../App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const pokemon = await fetchPokemonData(this.props.name);
    const pokemonEvol = await fetchPokemonEvolution(pokemon);
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
    const { showDetails } = this.props;

    const hasEvol = pokemonEvolution.evolves_from_species;

    // el 26 es la entrada en espanol del juego pokemon x
    //(Puede fallar si se cargan todos los pokemons de la api)
    const phrase = pokemonEvolution.flavor_text_entries[26].flavor_text;

    if (showDetails) {
      return (
        <Link to={"/pokedex/"}>
          <div className="cardDetailContainer">
            <div>
              <p className="pokePhrase">{phrase}</p>
            </div>
            <div className="pokeIMGDetail">
              <img
                alt="pokemon"
                className="pokeimg"
                src={pokemon.sprites.front_default}
              />
            </div>

            <div className="CardContentDetail">
              <div className="pokeIDDetail">ID / {pokemon.id}</div>
              <p className="pokeNameDetail">{pokemon.name}</p>

              <div className="pokeTypeContainerDetail">
                {pokemon.types.map((item) => (
                  <div className="pokeType" key={item.slot}>
                    {item.type.name}
                  </div>
                ))}
              </div>
              <div>
                {hasEvol ? (
                  <div className="evolutionDetail">
                    Evoluciona de:
                    <p className="evolPokemonDetail">
                      {pokemonEvolution.evolves_from_species.name}
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </Link>
      );
    }

    return (
      <Link to={`/pokedex/pokemon/${pokemon.name}`} className="card">
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
                <p className="evolPokemon">
                  {pokemonEvolution.evolves_from_species.name}
                </p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
