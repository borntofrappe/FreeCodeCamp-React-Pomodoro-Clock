import React from 'react';
import PlayButton from './svg/PlayButton';
import './css/Input.css';

const Input = () => {
    return (
      <div className="Input">
        <label>Session</label>

        <div className="InputSession">
          <button>
            <PlayButton />
          </button>

          <input type="text" value={25}/>

          <button>
            <PlayButton />
          </button>

        </div>
      </div>
    );
}

export default Input;