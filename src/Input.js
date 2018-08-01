import React from 'react';
import PlayButton from './svg/PlayButton';
import './css/Input.css';

const Input = (props) => {
    return (
      <div className="Input">
        <label>{props.for} session</label>

        <div className="InputSession">
          <button onClick={props.increment}>
            <PlayButton />
          </button>

          <span>{props.value}</span>

          <button onClick={props.decrement}>
            <PlayButton />
          </button>

        </div>
      </div>
    );
}

export default Input;