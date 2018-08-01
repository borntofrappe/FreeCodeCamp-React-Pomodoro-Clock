import React from 'react';
import PlayButton from './svg/PlayButton';
import './css/Input.css';

/*
render the input including a label and a header displaying the length of the sessions 
surrounded by buttons which increment and decrement the value found in the state 
*/
const Input = (props) => {

    return (
      <div className="Input">
        <label>{props.for} session</label>

        <div className="InputSession">
          <button onClick={props.increment} id={props.reference[0]}>
            <PlayButton />
          </button>

          <h2>{props.value}</h2>

          <button onClick={props.decrement} id={props.reference[1]}>
            <PlayButton />
          </button>

        </div>
      </div>
    );

}

export default Input;