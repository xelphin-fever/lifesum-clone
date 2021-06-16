import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Meal from './pages/Meal';
import Search from './pages/Search';
import Food from './pages/Food';
import SignIn from './pages/SignIn';
import DataSheet from './pages/DataSheet';
import {dateReducer, resultsReducer, configReducer} from './functions/reducers';
import Configure from './pages/Configure';
import {defaultConfigure} from './functions/constants';
import firebase from './firebase';


function App() {

  const [stateDate, dispatchDate] = useReducer(dateReducer, {date: new Date()});
  const [stateResults, dispatchResults] = useReducer(resultsReducer, {results: []});
  const [stateConfig, dispatchConfig] = useReducer(configReducer, {config: defaultConfigure});
  const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);

  // useEffect on [] get config (from firestore) and dispatch update

  // SET SIGNED STATUS
  firebase.auth().onAuthStateChanged(() => {
    setIsSigned(!!firebase.auth().currentUser);
  });

  // SET CONFIG
  useEffect(() => {
    let abortController = new AbortController();
    let aborted = abortController.signal.aborted;
    if (isSigned===true ){
      let firestore = firebase.firestore();
      const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('settings').doc('config')
      usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
              usersRef.onSnapshot((doc) => {
                aborted = abortController.signal.aborted;
                if (aborted===false){
                  dispatchConfig({type: 'update', payload: doc.data() })
                }
              });
            } else {
              usersRef.set(defaultConfigure); // Create Doc with Default
            }
      });
    }
    return () => {
      abortController.abort();
    };
  }, [isSigned]);

  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/lifesum-clone/' component={() => <Home date={stateDate.date} dispatchDate={dispatchDate} config={stateConfig.config} dispatchConfig={dispatchConfig}/>}/>
          <Route exact path='/meal/:id' component={() => <Meal date={stateDate.date} dispatchDate={dispatchDate} config={stateConfig.config}/>}/>
          <Route exact path='/lifesum-clone/signin' component={() => <SignIn/>}/>
          <Route exact path='/meal/:id/search' component={() => <Search date={stateDate.date} results={stateResults.results} dispatchResults={dispatchResults}/>}/>
          <Route exact path='/meal/:id/search/:id' component={() => <Food date={stateDate.date}/>}/>
          <Route exact path='/datasheet' component={() => <DataSheet date={stateDate.date} config={stateConfig.config} />}/>
          <Route exact path='/configure' component={() => <Configure config={stateConfig.config} dispatchConfig={dispatchConfig}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
