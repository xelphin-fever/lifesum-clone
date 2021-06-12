import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Meal from './pages/Meal';
import SignIn from './pages/SignIn';
import {dateReducer} from './functions/reducers';

function App() {

  const [stateDate, dispatchDate] = useReducer(dateReducer, {date: new Date()});

  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/' component={() => <Home date={stateDate.date} dispatchDate={dispatchDate} />}/>
          <Route exact path='/meal/:id' component={() => <Meal date={stateDate.date} dispatchDate={dispatchDate}/>}/>
          <Route exact path='/signin' component={() => <SignIn/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
