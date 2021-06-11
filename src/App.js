import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Meal from './pages/Meal';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/' component={() => <Home/>}/>
          <Route exact path='/meal/:id' component={() => <Meal/>}/>
          <Route exact path='/signin' component={() => <SignIn/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
