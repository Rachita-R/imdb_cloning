import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 100 },
    { name: "Mango", price: 80 },
    { name: "Banana", price: 90 },
    { name: "Grapes", price: 120 },

  ];

  return (
    <div>
      {fruits.map(fruit => (
        <Fruit name={fruit.name} price={fruit.price}/>
      ))}
    </div>
  );
}
export default Fruits;
