import React, {useState, useEffect} from 'react';
import '../stylesheets/Food.css';
import {Link, useRouteMatch} from "react-router-dom";
import {foodFrame} from '../functions/constants';
import {formatDate, findNutrient} from '../functions/helperFunctions';
import {Dropdown, DropdownElement, MessageDiv} from '../stylesheets/styledComponents';
import ProgressCircle from '../components/ProgressCircle';

const Food = (props) => {
  const link = useRouteMatch('/meal/:id/search/:id').url.split('/');
  console.log('link is: ', link);
  const foodId=link[link.length-1];
  let meal = link[link.length-3];
  console.log('The ID of the food is: ',foodId);
  console.log('The meal is: ', meal);
  console.log('The date is: ', formatDate(props.date));
  //
  const [result, setResult] = useState(foodFrame);
  const [amount, setAmount] = useState(1);
  const [unit, setUnit] = useState("g");
  const [macrosPer, setMacrosPer] = useState([["protein",30], ["fat",20], ["carbs", 50]]);

  // LISTEN FOR 'ENTER' EVENT AND UPDATE AMOUNT INPUT
  useEffect(() => {
    let input = document.getElementById("page-food-amount");
    input.value = amount;
    const pressedEnter = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        console.log('clicked on enter from input, value:', input.value);
        setAmount(input.value);
      }
    }
    input.addEventListener("keyup", pressedEnter);
    return () => {
      return input.removeEventListener("keyup", pressedEnter);
    };
  }, []);

  // COLLECT RESULT FROM API
  useEffect(() => {
    console.log('Amount is now: ', amount, '. Unit is: ', unit);
  }, [amount, unit]);

  // UPDATE VARIABLES ON RESULT CHANGE
  useEffect(() => {
    const myMacros = result.nutrition.caloricBreakdown;
    console.log('Protein: ', myMacros.percentProtein)
    setMacrosPer([["protein",myMacros.percentProtein], ["fat",myMacros.percentFat], ["carbs", myMacros.percentCarbs]]);
  }, [result])

  return (
    <div  className="page-food">
      <div className="page-food-top">
        <h2>{result.nameClean}</h2>
      </div>

      <div className="page-food-section">
        <div className="page-food-inputs">
          <MessageDiv>
            <h2 className="component-message">Press Enter to Submit</h2>
            <input type="number" min="0" id="page-food-amount"/>
          </MessageDiv>
          <Dropdown fontSize="55px">
            <button className="dropdown-btn">{unit} ⏷</button>
            <div className="dropdown-content">
              {
                result.possibleUnits.map((unit) => {
                  return <DropdownElement key={unit} onClick={() => setUnit(unit)}> {unit}</DropdownElement>
                })
              }
            </div>
          </Dropdown>
        </div>
        <div>
          <h2>{findNutrient(result,"Calories").amount} cals</h2>
        </div>
      </div>

      <div className="page-food-section">
        <h3>Nutritional Information</h3>
        <div className="page-food-macros">
          {
            macrosPer.map((macro) => {
              return <ProgressCircle key={macro[0]} progress={Number(macro[1])} circleSize="250" calories={`${macro[1]}%`} message={macro[0]}/>
            })
          }
        </div>
        <div className="page-food-nutrients">
          {
            result.nutrition.nutrients.map((nutrient) => {
              return <div className="page-food-nutrient" key={nutrient.name} >
                <div className="page-food-nutrient-top">
                  <h4 className="page-food-nutrient-top-text">{nutrient.name}</h4>
                  <h4 className="page-food-nutrient-top-text">{nutrient.amount + nutrient.unit}</h4>
                </div>
                <div>
                  <h4 className="page-food-nutrient-percent">{nutrient.percentOfDailyNeeds}% of Daily Needs</h4>
                </div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  );
}

export default Food;


/*

          <Dropdown>
            <button className="dropdown-btn">{unit}</button>
            <div className="dropdown-content">
              {
                result.possibleUnits.map((unit) => {
                  return <DropdownElement key={unit}> {unit} </DropdownElement>
                })
              }
            </div>
          </Dropdown>
*/