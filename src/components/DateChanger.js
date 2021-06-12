import React from 'react';
// import styled from 'styled-components'

const DateChanger = (props) => {

  return (
    <div  className="datechanger">
      <button onClick={() => props.dispatchDate({type: 'decrement'})}>⬅</button>
      <h1>{props.date}</h1>
      <button  onClick={() => props.dispatchDate({type: 'increment'})}>➡</button>
    </div>
  );
}

export default DateChanger;