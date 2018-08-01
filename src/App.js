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
  /*
  in the constructor function, for the state and functions respectively
  - define an object with variables used in the project
    - isRunning to toggle between running and pausing the timer
    - interval to hold a reference to an interval
    - working to describe the length of the working session
    - break for the length of the break session (_caveat_: break is not a valid name for a variable, which is kind of a bother)
    - timer holding the name of the current session as well as the minutes and seconds of the session. Values which are updated every second 
  
  - bind the functions used in the project
    - toggleIsRunning to flip the boolean from true to false and vice versa
    - startPauseTimer to start and pause the timer depending on the value of the boolean
    - resetTimer to stop the timer and restore the timer to its original values
    - timerIsRunning to modify the state at every iteration (this function is run every second thank to the interval set up by startPauseTimer)
  
    - increment and decrement functions, for the working and break sessions, to resolve the purpose of the name they bear
  */

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

    this.incrementWorking = this.incrementWorking.bind(this);
    this.decrementWorking = this.decrementWorking.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    
  }

  /* switch isRunning from true to false and vice versa */
  toggleIsRunning() {
    this.setState({
      isRunning: !this.state.isRunning
    });
  }

  /* toggle isRunning and depending on its value clear the existing interval or start a new one, calling a function which updates the state */
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

  // clear the interval and restore the state to the initial values
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

  /*
  manage the timer, reducing the seconds and the minutes at every iteration 
  when hitting zero, set the values of the timer to the break and working session every time around
  */
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
  if the timer is not running, update the length of the working and break sessions 
  in the 0-60 range 
  updating timer.minutes to immediately update the UI 
  */
  incrementWorking() {
    if(!this.state.isRunning) {
      let working = this.state.working;
      if(working >= 1 && working < 60) {
        this.setState({
          working: working + 1,
          timer: {
            session: 'working',
            minutes: working + 1,
            seconds: 0
          }
        });
      }
    }
  }
  decrementWorking() {
    if(!this.state.isRunning) {
      let working = this.state.working;
      if(working > 1 && working <= 60) {
        this.setState({
          working: working - 1,
          timer: {
            session: 'working',
            minutes: working - 1,
            seconds: 0
          }
        });
      }
    }
  }

  incrementBreak() {
    // small caveat: break is not a valid name for a variable
    if(!this.state.isRunning) {
      let breaky = this.state.break;
      if(breaky >= 1 && breaky < 60) {
        this.setState({
          break: breaky + 1,
          timer: {
            session: 'working',
            minutes: this.state.working,
            seconds: 0
          }
        });
      }
    }
  }

  decrementBreak() {
    if(!this.state.isRunning) {
      let breaky = this.state.break;
      if(breaky > 1 && breaky <= 60) {
        this.setState({
          break: breaky - 1,
          timer: {
            session: 'working',
            minutes: this.state.working,
            seconds: 0
          }
        });
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

        <AppVisuals 
          working={this.state.working}
          break={this.state.break}
          timer={this.state.timer} />

        <AppControls 
          isRunning={this.state.isRunning} 
          startPauseTimer={this.startPauseTimer} 
          resetTimer={this.resetTimer} />

        <AppInputs 
          working={this.state.working}
          break={this.state.break}
          incrementWorking={this.incrementWorking}
          decrementWorking={this.decrementWorking}
          incrementBreak={this.incrementBreak}
          decrementBreak={this.decrementBreak} />
          
      </div>
    );
  }

}

export default App;
