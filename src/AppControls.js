import React from 'react';
import './css/AppControls.css';
import PlayButton from './svg/PlayButton';
import PauseButton from './svg/PauseButton';
import ResetButton from './svg/ResetButton';

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
