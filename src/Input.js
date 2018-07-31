import React from 'react';
import PlayButton from './svg/PlayButton';
import './css/Input.css';

const Input = (props) => {
  let sessionType = props.session;

    return (
      <div className="Input">
        <label>{sessionType} session</label>

        <div className="InputSession">
          <button>
            <PlayButton />
          </button>

          <input type="text" value="25"/>

          <button>
            <PlayButton />
          </button>

        </div>
      </div>
    );
}

export default Input;