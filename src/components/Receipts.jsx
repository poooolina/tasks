import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = (props) => {
  const [meal, setMeal] = useState("");
  console.log(meal);

  return (
    <div className="container">
      <input
        onClick={(e) => setMeal(e.target.value)}
        type="radio"
        name="meal"
        value="paste"
      />
      Paste Carbonara
      <input
        onClick={(e) => setMeal(e.target.value)}
        type="radio"
        name="meal"
        value="porridge"
      />
      Porridge
      <input
        onClick={(e) => setMeal(e.target.value)}
        type="radio"
        name="meal"
        value="ramen"
      />
      Ramen
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
