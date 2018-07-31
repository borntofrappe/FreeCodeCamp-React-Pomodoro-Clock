import React from 'react';
import './css/AppInputs.css';
import Input from './Input';

const AppInputs = () => {
    return (
      <div className="AppInputs">
        <Input session="working"/>
        <Input session="break"/>
      </div>
    );
}

export default AppInputs;
