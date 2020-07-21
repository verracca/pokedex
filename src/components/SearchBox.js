import React from "react";
import "./../App.css";

function SearchBox({searchfield, searchChange}) {
  return (
    <div className="searchContainer">
      <input onChange={searchChange} className="searchInput" type="search" placeholder="Filtra pokemons por nombre..."/>
    </div>
  );
}

export default SearchBox;
