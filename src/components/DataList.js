import React from 'react';
import '../stylesheets/DataList.css'
import { PieChart } from 'react-minimal-pie-chart';

const DataList = (props) => {

  const findPercent = (type) => {
    const types = {
      fat: Number(props.data.sumFat),
      protein: Number(props.data.sumProtein),
      carb: Number(props.data.sumCarb),
    }
    // CHANGED BELOW TO TAKE INTO ACCOUNT DIVISION BY 0
    if (Number(props.data.sumFat)+Number(props.data.sumProtein)+Number(props.data.sumCarb)!==0){
      return Math.round((types[type]/(Number(props.data.sumFat)+Number(props.data.sumProtein)+Number(props.data.sumCarb)))*100);
    }
    return 0;
    
  }

  const typeColor = {
    fat: "rgb(160, 192, 160)",
    protein: "rgb(128, 155, 135)",
    carb: "rgb(106, 128, 115)",
  }

  const typeName = {
    fat: "Fat",
    carb: "Carbs",
    protein: "Protein",
  }

  const typeList = ["fat", "protein", "carb"];

  return (
    <div  className="datalist">
      <div className="datalist-portion">
        <h1>{props.data.sumCal} Calories</h1>
        <hr/>
        <div className="datalist-info">
          <h2>Recommended</h2>
          <h2>{`${props.goal -140}-${props.goal}`} cals</h2>
        </div>
        <div className="datalist-info">
          <h2>Calories</h2>
          <h2>{props.data.sumCal} cals</h2>
        </div>
        <hr/>
        <div className="datalist-info-pie">
          <PieChart className="datalist-pie"
            data={[
              { title: 'Fat', value: Number(props.data.sumFat), color: typeColor.fat },
              { title: 'Protein', value: Number(props.data.sumProtein), color: typeColor.protein },
              { title: 'Carb', value: Number(props.data.sumCarb), color: typeColor.carb },
            ]}
          />;
          <div className="datalist-pie-info">
            {
              typeList.map((type) => {
                return <div className="datalist-info" key={type}>
                  <div className="datalist-pie-label">
                    <div className="datalist-pie-color" style={{backgroundColor: typeColor[type]}}></div>
                    <h2>{typeName[type]}</h2>
                  </div>
                  <h2>{findPercent(type)}%</h2>
                </div>
              })
            }
          </div>
        </div>
      </div>

      <div className="datalist-portion">
        <div className="datalist-info">
          <h2>Calories</h2>
          <h2>{props.data.sumCal} cals</h2>
        </div>
        <div className="datalist-info">
          <h2>Protein</h2>
          <h2>{props.data.sumProtein}g</h2>
        </div>
        <div className="datalist-info">
          <h2>Carbs</h2>
          <h2>{props.data.sumCarb}g</h2>
        </div>
        <div className="datalist-info">
          <h2>Fat</h2>
          <h2>{props.data.sumFat}g</h2>
        </div>
      </div>

    </div>
  );
}

export default DataList;