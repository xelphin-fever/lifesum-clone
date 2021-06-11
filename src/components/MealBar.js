import React, {useState, useEffect} from 'react';
import '../stylesheets/MealBar.css';
import {Link} from "react-router-dom";

const MealBar = (props) => {

  const [meal, setMeal] = useState(props.meal);
  const [totalCal, setTotalCal] = useState(props.totalCal)

  const options = {
    "breakfast" : {
      title: "Breakfast",
      emoji: "🍳",
    },
    "lunch" : {
      title: "Lunch",
      emoji: "🥗",
    },
    "dinner" : {
      title: "Dinner",
      emoji: "🍲",
    },
    "snacks" : {
      title: "Snacks",
      emoji: "🍐",
    },
  }

  useEffect(()=> {
    setMeal(props.meal);
    setTotalCal(props.totalCal);
  }, [props])


  return (
    <div  className="mealbar">
      <Link to={`meal/${meal}`}>
        <div className="mealbar-top">
          <h2 className="mealbar-emoji">{options[meal].emoji}</h2>
          <div className="mealbar-text">
            <h2>{options[meal].title}</h2>
            <h3>Here I'll write down a list of foods</h3>
          </div>
          <button>➕</button>
        </div>
        <div className="mealbar-bottom">
          <h2>{totalCal} Calories</h2>
        </div>
      </Link>
    </div>
  );
}

export default MealBar;