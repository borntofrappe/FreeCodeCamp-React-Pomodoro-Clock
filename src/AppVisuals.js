import React from 'react';
import './css/AppVisuals.css';

/*
render a div used as a circle to visually relay information regarding the timer 
render a header relaying the time left in minutes and seconds
*/
const AppVisuals = (props) => {
  let minutes = (props.timer.minutes > 10) ? props.timer.minutes : `0${props.timer.minutes}`;
  let seconds = (props.timer.seconds > 10) ? props.timer.seconds : `0${props.timer.seconds}`;
    
    return (
      <div className="AppVisuals">
        <div className="VisualsHourglass"></div>
        <h2 className="VisualsSession">{props.session}</h2>
        <h2 className="VisualsTimer">{minutes}:{seconds}</h2>
      </div>
    );
}

export default AppVisuals;
