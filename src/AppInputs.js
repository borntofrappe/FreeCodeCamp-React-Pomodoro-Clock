import React from 'react';
import './css/AppInputs.css';
import Input from './Input';

/*
render two components responsible for the different input elements 
using a component which displays different values and leverages different functions according to the value passed as attributes 
*/
const AppInputs = (props) => {

    return (
      <div className="AppInputs">
        <Input
          reference={['session-increment', 'session-decrement']}
          for="working"
          value={props.working}
          increment={props.incrementWorking}
          decrement={props.decrementWorking} />
        <Input
          reference={['break-increment', 'break-decrement']}
          for="break"
          value={props.break}
          increment={props.incrementBreak}
          decrement={props.decrementBreak} />
      </div>
    );

}

export default AppInputs;
