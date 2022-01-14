import React from "react";

const Ingredients = ({ meal }) => {
  const meals = {
    paste: "spaghetti",
    porridge: "rice",
    ramen: "wheat flour",
  };
  return (
    <div>
      <h2>Ingredients:{meals[meal]}</h2>
    </div>
  );
};

export default Ingredients;
