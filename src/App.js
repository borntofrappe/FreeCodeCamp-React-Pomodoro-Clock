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
      timer: {
        minutes: 8,
        seconds: 0
      },
      session: [
        'working',
        'break'
      ]
    }
  }

  /*
  render 
  - a component relaying the amount of time left and the current session 
  - a component to start/pause or reset the timer 
  - a component to alter the length of the sessions
  */
  render() {
    return (
      <div className="App">
        <AppVisuals timer={this.state.timer} session={this.state.session[0]} />
        <AppControls />
        <AppInputs />
      </div>
    );
  }
}

export default App;
