

const formatDate = (date) => {
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();
  date = dd + '-' + mm + '-' + yyyy;
  return date;
}

const capitalize = (string) => {
  if (string !== "" && (typeof string === "string")){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return undefined;
}

const findNutrient = (food, name) => {
  const arrAll = food.nutrition.nutrients;
  const myNutrient = arrAll.filter((nut) => nut.name === name);
  if (myNutrient.length>0){
    return myNutrient[0]; 
  }
  return {
    "name": "Not Found",
    "amount": 0,
    "unit": "cal",
    "percentOfDailyNeeds": 0
  }; 

}

// TODO: Make function that updates the firestore data
//    For Example, if added food in one, updates all the macros and nutrients and stuff to match
//    Updates firestore
//    Does 'update' to date

export {formatDate, capitalize, findNutrient}