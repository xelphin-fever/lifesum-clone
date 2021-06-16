import React from 'react';
import '../stylesheets/FoodBar.css';
import {capitalize} from "../functions/helperFunctions";
import {findNutrient, deleteFood} from '../functions/helperFunctions';

const MealFoodBar = (props) => {

  const baseSrc = "https://spoonacular.com/cdn/ingredients_100x100/";

  const removeFood = () => {
    const updated = deleteFood(props.data, props.meal, props.food, props.order);
    props.update(updated);
  }

  return (
    <div  className="foodbar">
      <div className="foodbar-left">
        {
          props.food.image ? <img src={baseSrc+props.food.image} alt={props.food.name} /> : null
        }
        <div className="foodbar-text">
          <h2>{capitalize(props.food.name)}</h2>
          <h3>{findNutrient(props.food, "Calories").amount}cal  ⚫ {props.food.amount}{props.food.unit}</h3>
        </div>
      </div>
      <button onClick={() => removeFood()}>-</button>
    </div>
  );
}

export default MealFoodBar;

// <h3>{findNutrient(props.food, "Calories")}cal  ⚫  {props.food.quantity}{props.food.unit}</h3> 