import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../stylesheets/ProgressCircle.css'


const DataBar = (props) => {

  const fontSize2 = {
    fontSize: `${Math.round(Number(props.circleSize)/5)}px`
  }
  const fontSize3 = {
    fontSize: `${Math.round(Number(props.circleSize)/12)}px`
  }

  return (
    <div  className="progresscircle">
        <CircularProgress variant="determinate" value={props.progress} size={`${props.circleSize}px`} color="inherit" thickness={1.2}/>
          <div  className="progresscircle-text">
            <h2 style={fontSize2}>{props.calories}</h2>
            <h3  style={fontSize3}>{props.message}</h3>
        </div>
    </div>
  );
}

export default DataBar;