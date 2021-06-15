import React from 'react';
// import styled from 'styled-components'

const DateChanger = (props) => {

  const changeDate = (event) => {
    const newDate = new Date(event.currentTarget.value);
    newDate.setDate(newDate.getDate() + 1);
    props.dispatchDate({type: 'update', payload: newDate});
  }

  return (
    <div  className="datechanger">
      <button onClick={() => props.dispatchDate({type: 'decrement'})}>⬅</button>
      <div>
        <h1>{props.date}</h1>
        <input type="date" id="datechanger-date" onChange={changeDate}/>
      </div>
      <button  onClick={() => props.dispatchDate({type: 'increment'})}>➡</button>
    </div>
  );
}

export default DateChanger;