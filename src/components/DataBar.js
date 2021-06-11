import React, {useState, useEffect} from 'react';
// import styled from 'styled-components'
import '../stylesheets/DataBar.css'
import ProgressCircle from './ProgressCircle'


const DataBar = (props) => {
  // TODO: Listen for Firestore update on specific user at day, and update firestore

  const [goal, setGoal] = useState(1250);
  const [eaten, setEaten] = useState(1150);
  const [burnt, setBurnt] = useState(50);

  const [sumCalories, setSumCalories] = useState(0);
  const [caloriesLeft, setCaloriesLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressColor, setProgressColor] = useState({color: "white"});
  const [calMessage, setCalMessage] = useState("Calories Left")
  // TODO: useEffect when props changes and setState to what's needed

  useEffect(()=> {
    let sum = eaten -burnt;
    sum = sum<0 ? 0 : sum;
    setSumCalories(sum);
    }, [eaten, burnt]);

  useEffect(() => {
    let left = goal - sumCalories;
    let calc = Math.round((sumCalories/goal)*100);
    if (calc>100){
      calc = calc % 100;
      left = sumCalories - goal;
      setCalMessage("Calories Over");
      setProgressColor({color: "rgb(219, 138, 105)"})
    }
    if (calc>200){
      calc= 100;
    }
    setCaloriesLeft(left);
    setProgress(calc);
  }, [sumCalories, goal])

  return (
    <div  className="databar">
      <div className="databar-top">
        <div className="databar-data">
          <h2>{eaten}</h2>
          <h3>Calories Eaten</h3>
        </div>
        <div className="databar-calories" style={progressColor}>
          <ProgressCircle  progress={progress} circleSize="480" calories={caloriesLeft} message={calMessage}/>
        </div>
        <div className="databar-data">
          <h2>{burnt}</h2>
          <h3>Calories Burnt</h3>
        </div>
      </div>
      <div className="databar-bottom">
        <div className="databar-data">
          <h2>Carbs</h2>
          <h3>###</h3>
        </div>
        <div className="databar-data">
          <h2>Proetein</h2>
          <h3>###</h3>
        </div>
        <div className="databar-data">
          <h2>Fat</h2>
          <h3>###</h3>
        </div>
      </div>
    </div>
  );
}

export default DataBar;