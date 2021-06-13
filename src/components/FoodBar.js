import React from 'react';
import '../stylesheets/FoodBar.css';
import {capitalize} from "../functions/helperFunctions";

const FoodBar = (props) => {


  return (
    <div  className="foodbar">
      <div className="foodbar-left">
        {
          props.imgSrc ? <img src={props.imgSrc} alt={props.title} /> : null
        }
        <div className="foodbar-text">
          <h2>{capitalize(props.title)}</h2>
          {
            props.calories ? <h3>{props.calories}cal  ⚫  {props.quantity}</h3> : null
          }
        </div>
      </div>
      <button>➕</button>
    </div>
  );
}

export default FoodBar;