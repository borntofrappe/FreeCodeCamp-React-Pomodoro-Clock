import React from 'react';
import PlayButton from './svg/PlayButton';
import './css/Input.css';

/*
render the input including a label and a header displaying the length of the sessions 
surrounded by buttons which increment and decrement the value found in the state 

props holds quite a few values, including a few required by the user stories
- props.id holds an array with an identifier for the label, the header element and the different buttons
- props.label refers to the text to be displayed in the label (and to visually present the working/break input)
- props.increment and props.decrement refer to the methods which increment and decrement the length of the session
- props.value to include the length value of each session
*/
const Input = (props) => {

    return (
      <div className="Input">
        <label id={props.id[0]}>{props.label} session</label>

        <div className="InputSession">
          <button onClick={props.increment} id={props.id[2]}>
            <PlayButton />
          </button>

          <h2 id={props.id[1]}>{props.value}</h2>

          <button onClick={props.decrement} id={props.id[3]}>
            <PlayButton />
          </button>

        </div>
      </div>
    );

}

export default Input;