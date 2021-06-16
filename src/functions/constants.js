const nutritionFrame = [
    {
        "name": "Calories",
        "amount": 0,
        "unit": "cal",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Fat",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Saturated Fat",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Carbohydrates",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Net Carbohydrates",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Sugar",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Cholesterol",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Sodium",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Protein",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin C",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Manganese",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Fiber",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin B6",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Copper",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin B1",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Folate",
        "amount": 0,
        "unit": "µg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Potassium",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Magnesium",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin B3",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin B5",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin B2",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Iron",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Calcium",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin A",
        "amount": 0,
        "unit": "IU",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Zinc",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Phosphorus",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Vitamin K",
        "amount": 0,
        "unit": "µg",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Selenium",
        "amount": 0,
        "unit": "µg",
        "percentOfDailyNeeds":0
    },
    {
        "name": "Vitamin E",
        "amount": 0,
        "unit": "mg",
        "percentOfDailyNeeds": 0
    }
]



const dataFrame = {
  sumCal : 0,
  sumFat : 0,
  sumProtein : 0,
  sumCarb : 0,
  sumBurnt : 0,
  meals: {
    breakfast: {
      sumCal : 0,
      sumFat : 0,
      sumProtein : 0,
      sumCarb : 0,
      foods: [],
      nutrients: nutritionFrame,
    },
    lunch: {
      sumCal : 0,
      sumFat : 0,
      sumProtein : 0,
      sumCarb : 0,
      foods: [],
      nutrients: nutritionFrame,
    },
    dinner: {
      sumCal : 0,
      sumFat : 0,
      sumProtein : 0,
      sumCarb : 0,
      foods: [],
      nutrients: nutritionFrame,
    },
    snacks: {
      sumCal : 0,
      sumFat : 0,
      sumProtein : 0,
      sumCarb : 0,
      foods: [],
      nutrients: nutritionFrame,
    },
  },
  nutrients: nutritionFrame,
};


const foodFrame = {
  "id": 1111,
  "name": "name",
  "nameClean": "name clean",
  "amount": 1,
  "unit": "g",
  "possibleUnits": [
    "piece",
    "slice",
    "fruit",
    "g",
    "oz",
    "cup",
    "serving"
  ],
  "image": "imgFile",
  "meta": [],
  "nutrition": {
      "nutrients": nutritionFrame,
      "caloricBreakdown": {
          "percentProtein": 30,
          "percentFat": 20,
          "percentCarbs": 50
      },
      "weightPerServing": {
          "amount": 0,
          "unit": "g"
      }
  }
}

const defaultConfigure = {
    goalCal: 1800,
    goalFat: 50,
    goalProtein: 80,
    goalCarb: 200,
}


// TODO: make constant for user config

export {dataFrame, foodFrame, defaultConfigure};