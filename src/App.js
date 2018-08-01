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
      interval: 0,
      working: 25,
      break: 5,
      timer: {
        session: 'working',
        minutes: 25,
        seconds: 0
      }
    }

    this.toggleIsRunning = this.toggleIsRunning.bind(this);
    this.startPauseTimer = this.startPauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timerIsRunning = this.timerIsRunning.bind(this);
    
  }

  toggleIsRunning() {
    this.setState({
      isRunning: !this.state.isRunning
    });
  }

  startPauseTimer() {
    this.toggleIsRunning();
    if(this.state.isRunning) {
      clearInterval(this.state.interval);
    }
    else {
      let interval = setInterval(this.timerIsRunning, 1000);
      this.setState({
        interval: interval
      })
    }
  }

  resetTimer() {
    clearInterval(this.state.interval);
    this.setState({
        isRunning: false,
        interval: 0,
        working: 25,
        break: 5,
        timer: {
          session: 'working',
          minutes: 25,
          seconds: 0
        }
    });
  }


  timerIsRunning() {
    let session = this.state.timer.session;
    let minutes = this.state.timer.minutes;
    let seconds = this.state.timer.seconds;

    if(seconds === 0) {
      if(minutes === 0) {
        if(session === 'working') {
          session = 'break';
          minutes = this.state.break;
        }
        else {
          session = 'working';
          minutes = this.state.working;
        }
        seconds = 0;
      }
      else {
        minutes --;
        seconds = 59;
      }
    }
    else {
      seconds --;
    }
    this.setState({
      timer: {
        session: session,
        minutes: minutes,
        seconds: seconds
      }
    });
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
        <AppVisuals 
          timer={this.state.timer} />
        <AppControls 
          isRunning={this.state.isRunning} 
          startPauseTimer={this.startPauseTimer} 
          resetTimer={this.resetTimer} />
        <AppInputs />
      </div>
    );
  }
}

export default App;
