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
  - minutes and seconds, describing the minutes and seconds left respectively in the timer
  
  _please note_
  as minutes and seconds are integers, they are not zero-padded (meaning they display 8 instead of 08)
  include such a padding with a ternary operator
  */

 
 let session = props.timer.session;
 let minutes = props.timer.minutes;
 let seconds = props.timer.seconds;

 //  to update the hourglass UI, consider the length of the current session (in seconds), consider how much time is left (in seconds) and update the CSS variable responsible for the linear-gradient
 let root = document.querySelector(":root");
 let sessionLength = props[session] * 60;
 let sessionLeft = minutes * 60 + seconds;

 // the gradient variable needs to be updated with a percentage value
 // range: from 100% when the timer begins, 0% when it ends
 // to obtain the value divide the time left by the total time, retrieving a 0.x value which becomes smaller and smaller the more the timer continues
 // multiply by 100 and round it to have a 100-0 range
 let sessionPercentage = Math.floor(sessionLeft/sessionLength*100);
 root.style.setProperty("--gradient-height", `${sessionPercentage}%`);
    
    return (
      <div className="AppVisuals">
        <div className="VisualsHourglass"></div>
        <h2 className="VisualsSession">{session}</h2>
        <h2 className="VisualsTimer">
          {minutes >= 10 ? minutes : `0${minutes}`}
          :
          {seconds >= 10 ? seconds : `0${seconds}`}
        </h2>
      </div>
    );
}

export default AppVisuals;
