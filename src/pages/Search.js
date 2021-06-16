import React, {useState, useEffect} from 'react';
import '../stylesheets/Search.css';
import {Link, useRouteMatch} from "react-router-dom";
import {capitalize} from "../functions/helperFunctions";
import FoodBar from '../components/FoodBar'

const Search = (props) => {
  let meal = useRouteMatch('/meal/:id/search').url.split('/');
  meal=meal[meal.length-2];
  const [search, setSearch] = useState('');
  const baseSrc = "https://spoonacular.com/cdn/ingredients_100x100/";
  const myDispatchResults = props.dispatchResults;

  // LISTEN FOR 'ENTER' EVENT AND UPDATE SEARCH INPUT
  useEffect(() => {
    let input = document.getElementById("page-searchbar");
    const pressedEnter = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        setSearch(input.value);
      }
    }
    input.addEventListener("keyup", pressedEnter);
    return () => {
      return input.removeEventListener("keyup", pressedEnter);
    };
  }, []);


  // COLLECT RESULTS FROM API
  useEffect(() => {
    let abortController = new AbortController();
    let aborted = abortController.signal.aborted;
    if (search!==''){
      async function fetchResults() {
        let response = await fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${search}&number=25`);
        let data = await response.json();
        aborted = abortController.signal.aborted;
        if (aborted === false) {
          myDispatchResults({type: 'update', payload: data.results});
        }
      }
      fetchResults();
    }
    return () => {
      abortController.abort();
    };
  }, [search, myDispatchResults])


  return (
    <div  className="page-search">
      <div className="page-search-top">
        <div className="page-search-nav">
          <Link to={`/meal/${meal}`}>
            <button>⬅</button>
          </Link>
          <h2>{capitalize(meal)}</h2>
        </div>
        <input type="text" placeholder="🔍 Search Food" id="page-searchbar" />
      </div>
      <div className="page-search-items">
        {
          props.results.map((item) => {
            return <FoodBar key={item.id} id={'foodId-'+item.id} title={item.name} imgSrc={baseSrc+item.image} meal={meal}/>
          })
        }
      </div>
    </div>
  );
}

export default Search;


