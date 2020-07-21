import React from "react";
import Card from "./Card";

function CardList({ list }) {
  console.log("hola esta es mi", list);
  return (
    <div>
      {list.map((item) => (
        <Card 
        key={item.name}
        name={item.name}
        url={item.url}
         />
      ))}
    </div>
  );
}

export default CardList;
