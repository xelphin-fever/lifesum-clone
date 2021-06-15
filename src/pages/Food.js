import React, {useState, useEffect} from 'react';
import '../stylesheets/Food.css';
import {Link, useRouteMatch} from "react-router-dom";
import {foodFrame, dataFrame} from '../functions/constants';
import {formatDate, findNutrient, addFood} from '../functions/helperFunctions';
import {Dropdown, DropdownElement, MessageDiv , PrimaryButton} from '../stylesheets/styledComponents';
import ProgressCircle from '../components/ProgressCircle';
import firebase from '../firebase';

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
  const [data, setData] = useState(dataFrame);
  const [amount, setAmount] = useState(1);
  const [unit, setUnit] = useState("g");
  const [macrosPer, setMacrosPer] = useState([["protein",30], ["fat",20], ["carbs", 50]]);


  // GET DATA
  useEffect(() => {
    let firestore = firebase.firestore();
    const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date))
    usersRef.get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            setData(doc.data());
          });
        } else {
          console.log('the doc was not found, need to create it');
        }
    });
  }, [props.date])

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
    let isCancelled = false;
    console.log('Amount is now: ', amount, '. Unit is: ', unit);
    async function fetchResults() {
      let response = await fetch(`https://api.spoonacular.com/food/ingredients/${foodId}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&amount=${amount}&unit=${unit}`);
      let data = await response.json();
      if (isCancelled === false){
        console.log('Result Food: ', data);
        setResult(data);
      }      
    }
    fetchResults();
    
    return () => isCancelled=true;
  }, [amount, unit, foodId]);


  // UPDATE VARIABLES ON RESULT CHANGE
  useEffect(() => {
    const myMacros = result.nutrition.caloricBreakdown;
    console.log('Protein: ', myMacros.percentProtein)
    setMacrosPer([["protein",myMacros.percentProtein], ["fat",myMacros.percentFat], ["carbs", myMacros.percentCarbs]]);
  }, [result])


  // TRACK FOOD
  const trackFood = () => {
    // TODO: make a 'data' state variable that is the same as the firestore data (all from the date)
    console.log('Going to Update Firestore');
    console.log('The result being: ', result);
    console.log('The data (before update) being: ', data);
    const updated = addFood(data, meal, result);
    var db = firebase.firestore();
    db.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date)).update(updated)

    // TODO: updata 'data' OR button throws link to Meal page
  }



  return (
    <div  className="page-food">
      <div className="page-food-top">
        <h2>{result.name}</h2>
      </div>

      <div className="page-food-section">
        <div className="page-food-inputs">
          <MessageDiv>
            <h2 className="component-message">Press Enter to Submit</h2>
            <input type="number" min="1" id="page-food-amount"/>
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

      <div className="page-food-trackDiv">
        <Link to={`/meal/${meal}`}>
          <PrimaryButton onClick={trackFood}>Track Food</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default Food;