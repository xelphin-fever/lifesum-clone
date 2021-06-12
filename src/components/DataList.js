import React from 'react';
import '../stylesheets/DataList.css'

const DataList = (props) => {

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
        <div className="datalist-info">
          <h2>[Pie Chart]</h2>
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