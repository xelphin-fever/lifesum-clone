import React, {useState, useEffect} from 'react';
// import styled from 'styled-components'
import '../stylesheets/DataBar.css'
import ProgressCircle from './ProgressCircle';
import {Link} from "react-router-dom";

const DataBar = (props) => {

  const [goalCal, setGoalCal] = useState(props.config.goalCal);
  // Macros: [carb , protein, fat]
  const macros = ["Carbs", "Protein", "Fat"];
  const [goalMacro, setGoalMacro] = useState([props.config.goalCarb, props.config.goalProtein, props.config.goalFat]); 
  const [eaten, setEaten] = useState(0);
  const [eatenMacros, setEatenMacros] = useState([0,0,0])
  const [burnt, setBurnt] = useState(0);

  const [sumCalories, setSumCalories] = useState(0);
  const [caloriesLeft, setCaloriesLeft] = useState(0);
  const [macrosLeft, setMacrosLeft] = useState([0,0,0]);
  const [progressCal, setProgressCal] = useState(0);
  const [progressMacro, setProgressMacro] = useState([0,0,0]);
  const [progressCalColor, setProgressCalColor] = useState({color: "white"});
  const [progressMacroColor, setProgressMacroColor] = useState([{color: "white"}, {color: "white"}, {color: "white"}]);
  const [calMessage, setCalMessage] = useState("Calories Left");
  const [macroMessage, setMacroMessage] = useState(["Grams Left", "Grams Left", "Grams Left"]);
  



  useEffect(() => {
    setEaten(props.data.sumCal);
    setBurnt(props.data.sumBurnt);
    setEatenMacros([props.data.sumCarb, props.data.sumProtein, props.data.sumFat]);
  }, [props.data]);
  useEffect(()=> {
    setGoalCal(props.config.goalCal);
    setGoalMacro([props.config.goalCarb, props.config.goalProtein, props.config.goalFat]);
  }, [props.config])



  useEffect(()=> {
    let sum = eaten -burnt;
    sum = sum<0 ? 0 : sum;
    setSumCalories(sum);
    }, [eaten, burnt]);

  useEffect(() => {
    let left = goalCal - sumCalories;
    let calc = Math.round((sumCalories/goalCal)*100);
    if (calc>100){
      calc = calc % 100;
      left = sumCalories - goalCal;
      setCalMessage("Calories Over");
      setProgressCalColor({color: "rgb(245, 235, 146)"})
    } else {
      setProgressCalColor({color: "white"})
    }
    if (calc>200){
      calc= 100;
    }
    setCaloriesLeft(left);
    setProgressCal(calc);
  }, [sumCalories, goalCal]);

  useEffect(() => {
    // FIX: Dependency Warning (but can't add dependency because I update them within this useEffect -> infinite)
    let copyMacrosLeft = [...macrosLeft];
    let copyMacrosProg = [...progressMacro];
    let progColorCopy = [...progressMacroColor];
    let copyMacroMessage = [...macroMessage];
    for (let i=0; i<3; i++){
      let left = goalMacro[i] - eatenMacros[i];
      let calc = Math.round((eatenMacros[i]/goalMacro[i])*100);
      if (calc>100){
        calc = calc % 100;
        left = eatenMacros[i] - goalMacro[i];
        progColorCopy[i] = {color: "rgb(245, 235, 146)"};
        copyMacroMessage[i] = "Grams Over";
        
      } else {
        progColorCopy[i] = {color: "white"};
      }
      if (calc>200){
        calc= 100;
      }
      copyMacrosLeft[i] = left;
      copyMacrosProg[i] = calc;
    }
    setProgressMacroColor(progColorCopy);
    setMacrosLeft(copyMacrosLeft);
    setProgressMacro(copyMacrosProg);
    setMacroMessage(copyMacroMessage);
    
  }, [eatenMacros, goalMacro])

  return (
    <div  className="databar">
      <div className="databar-top">
        <div className="databar-data">
          <h2>{eaten}</h2>
          <h3>Calories Eaten</h3>
        </div>
        <div className="databar-calories" style={progressCalColor}>
          <ProgressCircle  progress={progressCal} circleSize="480" calories={caloriesLeft} message={calMessage}/>
        </div>
        <div className="databar-data">
          <h2>{goalCal}</h2>
          <h3>Calorie Goal</h3>
        </div>
      </div>
      <div className="databar-bottom">
        {
          macros.map((macro, count) => {
            return <div className="databar-data" key={macro} style={progressMacroColor[count]}>
              <h2 style={{color: "white"}}>{macro}</h2>
              <ProgressCircle  progress={progressMacro[count]} circleSize="240" calories={macrosLeft[count]} message={macroMessage[count]}/>
            </div>
          })
        }

      </div>
      <Link to={`/datasheet`}>
        <button className="databar-button">📊 Nutrient Data</button>
      </Link>
    </div>
  );
}

export default DataBar;