import React, {useState, useEffect} from 'react';
import DataBar from '../components/DataBar';
import DateChanger from '../components/DateChanger';
import MealBar from '../components/MealBar';
import SignIn from './SignIn'
import '../stylesheets/Home.css';
import firebase from '../firebase';

const Home = (props) => {

  // TODO: Listen to firestore change, update props
  const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged(() => {
    setIsSigned(!!firebase.auth().currentUser);
  });

  const setSigned = (ans) => {
    setIsSigned(ans);
  }


  if (isSigned){
    return (
      <div  className="page-home">
        <div className="page-home-top">
          <button onClick={() => {firebase.auth().signOut()}}>Sign Out</button>
          <DataBar/>
        </div>
        
        <DateChanger/>
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