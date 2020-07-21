import React from "react";

function SearchBox({searchfield, searchChange}) {
  return (
    <div>
      <input onChange={searchChange} type="search" placeholder="Filtra pokemons por nombre..."/>
    </div>
  );
}

export default SearchBox;
