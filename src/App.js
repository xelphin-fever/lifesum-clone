import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Meal from './pages/Meal';
import Search from './pages/Search';
import Food from './pages/Food';
import SignIn from './pages/SignIn';
import DataSheet from './pages/DataSheet';
import {dateReducer, resultsReducer} from './functions/reducers';

function App() {

  const [stateDate, dispatchDate] = useReducer(dateReducer, {date: new Date()});
  const [stateResults, dispatchResults] = useReducer(resultsReducer, {results: []});

  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/lifesum-clone/' component={() => <Home date={stateDate.date} dispatchDate={dispatchDate} />}/>
          <Route exact path='/meal/:id' component={() => <Meal date={stateDate.date} dispatchDate={dispatchDate}/>}/>
          <Route exact path='/lifesum-clone/signin' component={() => <SignIn/>}/>
          <Route exact path='/meal/:id/search' component={() => <Search date={stateDate.date} results={stateResults.results} dispatchResults={dispatchResults}/>}/>
          <Route exact path='/meal/:id/search/:id' component={() => <Food date={stateDate.date}/>}/>
          <Route exact path='/datasheet' component={() => <DataSheet date={stateDate.date}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
