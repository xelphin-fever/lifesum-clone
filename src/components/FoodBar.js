import React from 'react';
import '../stylesheets/FoodBar.css';
import {capitalize} from "../functions/helperFunctions";
import {Link} from "react-router-dom";

const FoodBar = (props) => {

  const getNumId = (id) => {
    const arr = id.split('-');
    return arr[1];
  }

  return (
    <div  className="foodbar">
      <Link to={`/lifesum-clone/meal/${props.meal}/search/${getNumId(props.id)}`}>
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
      </Link>
    </div>
  );
}

export default FoodBar;