import React, {useState, useEffect} from 'react';
import '../stylesheets/Meal.css'
import { useRouteMatch, Link } from "react-router-dom";
import {formatDate} from '../functions/helperFunctions';
import ProgressCircle from '../components/ProgressCircle';
import firebase from '../firebase';
import {dataFrame} from '../functions/constants';
import DataList from '../components/DataList.js';
import {PrimaryButton} from '../stylesheets/styledComponents';

const Meal = (props) => {
  let meal = useRouteMatch('/lifesum-clone/meal/:id').url.split('/');
  meal=meal[meal.length-1];
  // TODO: Listen to firestore change, update props
  const [goal, setGoal] = useState(400); // TODO: make config collection in firestore for each user and there have the goals
  const [data, setData] = useState(dataFrame.meals[meal]);
  const [progressColor, setProgressColor] = useState({color: "white"});
  const [progress, setProgress] = useState(0);
  const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);

  useEffect(() => {
    // NOTE: instead of useEffect maybe listen for firestore at doc changes
    let firestore = firebase.firestore();
    if (firebase.auth().currentUser){
      firestore.collection("users").doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date)).get().then((myDoc) => {
        console.log('MyDoc in Meal: ', myDoc)
        setData(myDoc.data().meals[meal]);
      }).catch(function (error) {
        console.error("Error in Meal: ", error);
      })
    } else {
      console.log('not logged in cannot update meal');
    }
  }, [props.date, meal, isSigned]);

  firebase.auth().onAuthStateChanged(() => {
    setIsSigned(!!firebase.auth().currentUser);
  });
  // TODO: make a 'doc change' lister as well?


  useEffect(() => {
    let calc = Math.round((data.sumCal/goal)*100);
    if (calc>100){
      calc = calc % 100;
      setProgressColor({color: "rgb(226, 190, 113)"})
    } else {
      setProgressColor({color: "white"})
    }
    if (calc>200){
      calc= 100;
      setProgressColor({color: "rgb(219, 138, 105)"})
    }
    setProgress(calc);
  }, [data, goal])



  return (
    <div  className="page-meal">
      <div className="page-meal-top">
        <div className="page-meal-progress" style={progressColor}>
          <ProgressCircle  progress={progress} circleSize="400" calories={data.sumCal} message={"calories eaten"}/>
        </div>
        <h2>{meal}</h2>
        <h3>{formatDate(props.date)}</h3>
      </div>
      <Link to={`${meal}/search`} className="page-meal-search-link">
        <PrimaryButton width="60%">Add Food</PrimaryButton>
      </Link>
      <div className="page-meal-foodlist">

      </div>
      <div className="page-meal-datalist">
        <DataList data={data} goal={goal}/>
      </div>

      <div className="page-meal-back-div">
        <Link to="/lifesum-clone">
          <h2>⬅</h2>
        </Link>
      </div>
    </div>
  );
}

export default Meal;