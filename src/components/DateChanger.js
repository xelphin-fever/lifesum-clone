import React, {useState, useEffect} from 'react';

// import styled from 'styled-components'



const DateChanger = (props) => {
  // TODO: Listen for Firestore update on specific user at day, and update firestore

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  const [date, setDate] = useState(today)


  return (
    <div  className="datechanger">
      <button>⬅</button>
      <h1>{today}</h1>
      <button>➡</button>
    </div>
  );
}

export default DateChanger;