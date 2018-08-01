import React from 'react';
import './css/AppControls.css';
import PlayButton from './svg/PlayButton';
import PauseButton from './svg/PauseButton';
import ResetButton from './svg/ResetButton';

/*
- render the button responsible for the start/pause functionality 
  showing the SVG asset according to whether or not the timer is running 
- render the button responsible for the reset button
*/
const AppControls = (props) => {

  return (
    <div className="AppControls">
      <button onClick={props.startPauseTimer}>
        {
          props.isRunning ? <PauseButton />: <PlayButton />
        }
      </button>
      <button onClick={props.resetTimer}>
        <ResetButton />
      </button>
    </div>
  );
  
}

export default AppControls;
