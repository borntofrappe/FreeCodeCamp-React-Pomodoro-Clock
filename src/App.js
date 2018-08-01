import React, { Component } from 'react';
import './css/App.css';
import AppVisuals from './AppVisuals';
import AppControls from './AppControls';
import AppInputs from './AppInputs';

/*
with a stateful component 
- manage the state of the application 
- render the different sections of the application, passing to each the required values from the state 
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      working: 25,
      break: 5,
      timer: {
        session: 'working',
        minutes: 25,
        seconds: 0
      }
    }
    
  }

  

  /*
  render 
  - a component relaying the amount of time left and the current session 
  - a component to start/pause or reset the timer 
  - a component to modify the length of the sessions
  */
  render() {
    return (
      <div className="App">
        <AppVisuals timer={this.state.timer} />
        <AppControls />
        <AppInputs />
      </div>
    );
  }
}

export default App;
