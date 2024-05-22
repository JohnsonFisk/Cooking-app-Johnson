import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <p className="origine">Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
      <ul>
        <p>Ingredients : </p>
        <li>{meal.strIngredient1}</li>
        <li>{meal.strIngredient2}</li>
        <li>{meal.strIngredient3}</li>
        <li>{meal.strIngredient4}</li>
        <li>{meal.strIngredient5}</li>
        <li>{meal.strIngredient6}</li>
      </ul>
      <a target="_blank" href={meal.strSource}>
        Discovered the recipe
      </a>
    </div>
  );
};

export default Card;
