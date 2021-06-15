

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
const findNutrientData = (data, name) => {
  const arrAll = data.nutrients;
  
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

const updateBasicInfo = (data, meal, type, amount, operator) => {
  // type: "sumCal" || "sumFat" || ...
  // amount: [number]
  let newData = {...data};
  newData.meals[meal][type] = Math.round(operator==="add" ? newData.meals[meal][type] + amount : newData.meals[meal][type] - amount);
  newData[type] = Math.round(operator==="add" ? newData[type] + amount : newData[type] - amount);
  return newData;
}

const updateNutrientInfo = (data, meal, nutrientName, amount, percent, operator) => {
  // nutrient : "Calcium" || "Zinc" || ...
  let newData = {...data};
  newData.meals[meal].nutrients = newData.meals[meal].nutrients.map((obj) => {
    if (obj.name === nutrientName) {
      obj.amount = Math.round(operator==="add"? obj.amount + amount : obj.amount - amount);
      if (obj.percentOfDailyNeeds !== undefined){
        obj.percentOfDailyNeeds = Math.round(operator==="add"? obj.percentOfDailyNeeds + percent : obj.percentOfDailyNeeds - percent);
      }
    }
    return obj;
  });
  newData.nutrients = newData.nutrients.map(obj => {
    if (obj.name === nutrientName) {
      obj.amount = Math.round(operator==="add" ? obj.amount + amount : obj.amount - amount);
      if (obj.percentOfDailyNeeds!== undefined){
        obj.percentOfDailyNeeds = Math.round(operator==="add" ? obj.percentOfDailyNeeds + percent : obj.percentOfDailyNeeds + percent);
      }
    }
    return obj;
  });
  return newData;
}


const addFood = (data, meal, food) => {
  // data: JSON from Firestore -> Object as seen in ./constants 'dataFrame'
  // meal: "breakfast" || "lunch" || "dinner" || "snacks"
  // food: JSON from API -> Object as seen in ./constants 'dataFrame'
  let newData = {...data};
  newData.meals[meal].foods.push(food);
  const basicTypes = [["sumCal","Calories"], ["sumFat","Fat"], ["sumProtein","Protein"], ["sumCarb","Carbohydrates"]];
  basicTypes.forEach(typePair => {
    let myNutrient = food.nutrition.nutrients.filter((nutrient) => nutrient.name === typePair[1])[0];
    newData = updateBasicInfo(newData, meal, typePair[0], myNutrient.amount, "add");
  });
  
  food.nutrition.nutrients.forEach((nutrient) => {
    newData = updateNutrientInfo(newData, meal, nutrient.name, nutrient.amount, nutrient.percentOfDailyNeeds, "add");
  })
  return newData;
}

const deleteFood = (data, meal, food, order) => {
  let newData = {...data};
  newData.meals[meal].foods.splice(order, 1);
  const basicTypes = [["sumCal","Calories"], ["sumFat","Fat"], ["sumProtein","Protein"], ["sumCarb","Carbohydrates"]];
  basicTypes.forEach(typePair => {
    let myNutrient = food.nutrition.nutrients.filter((nutrient) => nutrient.name === typePair[1])[0];
    newData = updateBasicInfo(newData, meal, typePair[0], myNutrient.amount, "subtract");
  });
  food.nutrition.nutrients.forEach((nutrient) => {
    newData = updateNutrientInfo(newData, meal, nutrient.name, nutrient.amount, nutrient.percentOfDailyNeeds, "subtract");
  })
  return newData;
}



export {formatDate, capitalize, findNutrient, addFood, deleteFood, findNutrientData}