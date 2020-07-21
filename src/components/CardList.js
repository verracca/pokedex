import React from "react";
import Card from "./Card";
import "./../App.css";

function CardList({ list }) {
  return (
    <div className="cardContainer">
      {list.map((item) => (
        <Card key={item.name} name={item.name} url={item.url} />
      ))}
    </div>
  );
}

export default CardList;
