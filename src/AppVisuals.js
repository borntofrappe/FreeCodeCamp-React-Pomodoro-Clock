import React from 'react';
import './css/AppVisuals.css';

/*
render a div used as a circle to visually relay information regarding the timer 
render two headers relaying the the current session and the time left in minutes and seconds 
*/
const AppVisuals = (props) => {
  /*
  props.timer refers to an object, passed through the main component with the following properties
  - session, describing the session of the timer (working, break)
  - minutes and sedonds, describing the minutes and seconds left respectively in the timer
  
  _please note_
  as minutes and seconds are integers, they are not zero-padded (meaning they display 8 instead of 08)
  include such a padding with a ternary operator
  */

  let session = props.timer.session;
  let minutes = (props.timer.minutes > 10) ? props.timer.minutes : `0${props.timer.minutes}`;
  let seconds = (props.timer.seconds > 10) ? props.timer.seconds : `0${props.timer.seconds}`;
    
    return (
      <div className="AppVisuals">
        <div className="VisualsHourglass"></div>
        <h2 className="VisualsSession">{session}</h2>
        <h2 className="VisualsTimer">{minutes}:{seconds}</h2>
      </div>
    );
}

export default AppVisuals;
