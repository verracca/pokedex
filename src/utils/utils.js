const cache = {};

const pikCache = async (url) => {
  const cachedJson = cache[url];
  if (cachedJson) {
    return cachedJson;
  }
  const response = await fetch(url);
  const responseJson = await response.json();
  cache[url] = responseJson;
  return responseJson;
};

export const fetchData = async () => {
  try {
    const pokemonList = await pikCache(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    return pokemonList.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonData = async (name) => {
  try {
    const pokemon = await pikCache(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonEvolution = async (pokemon) => {
  try {
    const pokemonEvol = await pikCache(pokemon.species.url);

    return pokemonEvol;
  } catch (error) {
    console.log(error);
  }
};
