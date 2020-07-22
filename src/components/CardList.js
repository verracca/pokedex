import React from "react";
import Card from "./Card";
// import { Link } from "react-router-dom";
import "./../App.css";

function CardList({ list }) {
  return (
    <div className="cardContainer">
      {list.map((item) => (
        <Card key={item.name} name={item.name} />
      ))}
    </div>
  );
}

export default CardList;
