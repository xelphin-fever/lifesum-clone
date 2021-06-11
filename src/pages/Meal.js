import React from 'react';
import { useRouteMatch } from "react-router-dom";
import ProgressCircle from '../components/ProgressCircle'

const Meal = (props) => {
  let match =useRouteMatch('/meal/:id').url.split('/');
  match=match[match.length-1];
  // TODO: Listen to firestore change, update props

  return (
    <div  className="page-meal">
      <ProgressCircle  progress={80} circleSize="300" calories={250} message={"calories eaten"}/>
      <h2>{match}</h2>
    </div>
  );
}

export default Meal;