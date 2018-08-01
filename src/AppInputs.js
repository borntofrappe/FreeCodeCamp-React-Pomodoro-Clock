import React from 'react';
import './css/AppInputs.css';
import Input from './Input';

const AppInputs = (props) => {

    return (
      <div className="AppInputs">
        <Input
          for="working"
          value={props.working}
          increment={props.incrementWorking}
          decrement={props.decrementWorking} />
        <Input
          for="break"
          value={props.break}
          increment={props.incrementBreak}
          decrement={props.decrementBreak} />
      </div>
    );
}

export default AppInputs;
