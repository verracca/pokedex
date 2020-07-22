export const fetchData = async () => {
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

export const fetchPokemonData = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();

    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonEvolution = async (pokemon) => {
  try {
    const response = await fetch(pokemon.species.url);
    const pokemonEvol = await response.json();

    return pokemonEvol;
  } catch (error) {
    console.log(error);
  }
};
