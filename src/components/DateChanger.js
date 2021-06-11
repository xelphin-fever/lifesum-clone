import React, {useState, useEffect, useReducer} from 'react';
import {dateReducer} from '../functions/reducers';
// import styled from 'styled-components'



const DateChanger = (props) => {
  // TODO: Listen for Firestore update on specific user at day, and update firestore
  

  return (
    <div  className="datechanger">
      <button onClick={() => props.dispatchDate({type: 'decrement'})}>⬅</button>
      <h1>{props.date}</h1>
      <button  onClick={() => props.dispatchDate({type: 'increment'})}>➡</button>
    </div>
  );
}

export default DateChanger;