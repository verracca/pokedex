import React from "react";
import Card from "./Card";

function CardList({ list }) {
  
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
