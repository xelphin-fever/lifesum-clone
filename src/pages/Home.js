import React, {useState, useEffect} from 'react';
import DataBar from '../components/DataBar';
import DateChanger from '../components/DateChanger';
import MealBar from '../components/MealBar';
import SignIn from './SignIn'
import '../stylesheets/Home.css';
import firebase from '../firebase';
import {formatDate} from '../functions/helperFunctions';
import {dataFrame} from '../functions/constants';

const Home = (props) => {
  // TODO: Listen to firestore change, update props
  // VARIABLES
  const meals = ["breakfast", "lunch", "dinner", "snacks"];
  const [date, setDate] = useState(formatDate(new Date())); // xx-xx-xx
  const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);
  const [data, setData] = useState(dataFrame); // FIX: also update on any updates to Doc

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false){
      console.log('the date recorded now is: ', formatDate(props.date));
      setDate(formatDate(props.date));
    }
    return () => {
      isCancelled = true;
    };
  }, [props.date])



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
    
    if (isSigned===true ){
      console.log('(useEffect() of Home) - Am signed in');
      let firestore = firebase.firestore();
      const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(date)
      usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
              usersRef.onSnapshot((doc) => {
                console.log('the doc of this date exists!', doc);
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
        
        <DateChanger date={date} dispatchDate={props.dispatchDate}/>
        <div className="page-home-mealbars">
          {meals.map((meal) => <MealBar meal={meal} totalCal={data.meals[meal].sumCal} key={meal}/>)}
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