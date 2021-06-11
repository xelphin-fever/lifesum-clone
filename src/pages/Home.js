import React, {useState, useEffect, useReducer} from 'react';
import DataBar from '../components/DataBar';
import DateChanger from '../components/DateChanger';
import MealBar from '../components/MealBar';
import SignIn from './SignIn'
import '../stylesheets/Home.css';
import firebase from '../firebase';
import {formatDate} from '../functions/helperFunctions';
import {dateReducer} from '../functions/reducers';
import {dataFrame} from '../functions/constants'

const Home = (props) => {
  // TODO: Listen to firestore change, update props
  // VARIABLES
  const [stateDate, dispatchDate] = useReducer(dateReducer, {date: new Date()});
  const [date, setDate] = useState(formatDate(new Date())); // xx-xx-xx
  const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);
  const [data, setData] = useState(dataFrame); // FIX: also update on any updates to Doc

  useEffect(() => {
    console.log('the date recorded now is: ', formatDate(stateDate.date));
    setDate(formatDate(stateDate.date));
  }, [stateDate])



  // SET SIGNED STATUS
  firebase.auth().onAuthStateChanged(() => {
    console.log('(auth state change) - Signed in ', !!firebase.auth().currentUser);
    setIsSigned(!!firebase.auth().currentUser);
  });
  const setSigned = (ans) => {
    setIsSigned(ans);
  }

  // SET DATABASE
  useEffect (() => {
    if (isSigned===true){
      console.log('(useEffect() of Home) - Am signed in');
      let firestore = firebase.firestore();
      const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(date)
      usersRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
            usersRef.onSnapshot((doc) => {
              console.log('the doc of this date does exist!', doc);
              setData(doc.data()); 
            });
          } else {
            console.log('the doc was not found, need to create it');
            usersRef.set(dataFrame); // Created Doc
            setData(dataFrame);
          }
      });
    }

  }, [isSigned, date]);



  if (isSigned){
    return (
      <div  className="page-home">
        <div className="page-home-top">
          <button onClick={() => {firebase.auth().signOut()}}>Sign Out</button>
          <DataBar date={date} data={data}/>
        </div>
        
        <DateChanger date={date} dispatchDate={dispatchDate}/>
        <div className="page-home-mealbars">
          <MealBar meal="breakfast" totalCal="300"/>
          <MealBar meal="lunch" totalCal="300"/>
          <MealBar meal="dinner" totalCal="300"/>
          <MealBar meal="snacks" totalCal="300"/>
        </div>
      </div>
    );
  } else {
    return (
      <SignIn changeSign={setSigned}/>
    )
  }
}

export default Home;