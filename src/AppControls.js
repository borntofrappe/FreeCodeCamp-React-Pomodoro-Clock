import React from 'react';
import './css/AppControls.css';
import PlayButton from './svg/PlayButton';
import PauseButton from './svg/PauseButton';
import ResetButton from './svg/ResetButton';

const AppControls = () => {
  
  let isRunning = false;
  return (
    <div className="AppControls">
      <button>
        {
          (isRunning) ? <PauseButton />: <PlayButton />
        }
      </button>
      <button>
        <ResetButton />
      </button>
    </div>
  );
  
}

export default AppControls;
