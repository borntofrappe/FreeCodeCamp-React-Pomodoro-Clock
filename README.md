_Notice_

The application is currently being developed with the `create-react-app` utility. It will be published on CodePen with most of its functionalities, hopefully soon.

Link to the working pen passing _every single_ test right [here](https://codepen.io/borntofrappe/full/bjvmaJ/).

## Preface

For the penultimate project allowing me to earn the **Fron End Libraries** certification @freeCodeCamp, the task at hand is the creation of a pomodoro clock.

A simple, single page application similar to [this one](https://codepen.io/freeCodeCamp/full/XpKrrW).

Just as I mentioned for the other projects developed for the current certification, meaning the [random quote machine](https://codepen.io/borntofrappe/pen/yqXOXG) and the [functioning calculator](https://codepen.io/borntofrappe/pen/OwxKEY), I have already built such an application [before](https://codepen.io/borntofrappe/full/PeKwOW/). That time however, I did not use any external libraries, like **React.js**. To properly earn the **Fron End Libraries** certification I therefore decided to re-write my previous project with the library's inclusion.

I reckon only now how the re-write is not only a good pretext to practice with **React.js**, but with JavaScript as a whole.

## Design

As I did not want to replicate the same layout and overall look of the [previous application](https://codepen.io/borntofrappe/full/PeKwOW/), I spent an entire coding session to create a new design for the application. You can find the result [right here](https://codepen.io/borntofrappe/pen/LBeMdy). 

While I am not completely satisfied with the color palette chosen for the UI, I am quite proud of the layout of the different sections. I am also quite excited to tinker with a functioning project altering the appearance of the `.visuals__hourglass` container, visually relaying the amount of time left in each session.

Perhaps I went a little overboard with t\he size of the buttons to start/pause/reset the pomodoro clock, but that is something I am going to modify at a later stage. For quite large screen viewports, the sizes work fine, but there is a range in which they are overwhelming on the eye. Something to remember.

With the given UI, the project is ported to a React application using the `create-react-app` utility.

## User Stories

In order to fulfill the requirements of the freeCodeCamp testing suite, the project needs to fulfill several user stories, hereby included. I acknowledge them early in the development process to assess if the user stories demand particular tweaks to the overall design of the application.

- [x] there exist an element with `id="break-label` containing a string, as well as an element with `id="session-label` with again a string.

- [x] there exist two clickable elements with `id="break-decrement` and `id="break-increment`, as well as two clickable elements with `id="session-decrement` and `id="session-increment`.

- [x] there exist an element with `id="break-length` displaying `5` by default, as well as an elemen wih `id="session-length`, displaying by default `25`.

- [x] there exist an element with `id="timer-label`, which is something I haven't included in my UI. This ought to contain a string indicating that the session is begun. (showing how the timer relays a working or break session)

- [x] there exist an element with `id="time-left`, always displaying the remaining time in the `mm:ss` format.

- [x] there exist a clickable element with `id="start_stop"`, which sort of ruins my original plans of showing three buttons, but something which can be easily fixed by including the different SVG assets depending on whether or not the timer is running.

- [x] there exist a clickable element with `id="reset`.

- [x] upon clicking on `#reset` the timer should stop and the default value for `id="break-length` and `id="session-length` should be restored (to `5` and `25`). The element with `id="time-left` should also be reset to its default state.

- [x] when clicking on the _decrement_ and _increment_ buttons, the attachd value for the break and session length should be decremented and incremented respectively by 1.

- [x] the length of a break or of a session ought to be in the `[1, 60]` range.

- [x] upon clicking `#start_stop`, the timer should begin running from the displayed value.

- [x] when the timer is running, it should be decremented every 1000ms and the UI should display a matching value in `#time-left`.

- [x] if the timer is running, upon clicking `#start_stop`, the timer should pause. 

- [x] if the timer is paused, upon clicking `#start_stop`, the timer should start again, from the paused value. 

- [x] upon hitting `00:00`, a new timer should begin and the `#time-label` should relay of the change of session (from working to break and vice versa). Moreover, the timer should take the value from the respective _length_ element, `id="break-length` or `id="session-length`.

- [x] upon hitting `00:00`, a sound should be played to notify that the session is over. It should make use of the `<audio>` element with `id="beep"`. The sound must be 1s or longer. The sound must cease when resetting the timer, even prior to its completion.

A long list of requirements if there is one. The UI I created for the project does not need major adjustments, just the few noted next to the different user stories. The main challenges seem to be:

- add a timer for the working and break sessions;

- add the audio when the timer hits zero.

I include this last point because I rarely incorporated audio in my projects. Updating the UI when the different buttons are clicked should be instead relatively simpler.

## React.js

The following component-based structure is included on the basis of the HTML markup created for the project's UI.

**src**

- `index.js` renders the stateful component responsible for the application;

- `App.js` manages the state and includes the components responsible for the UI of the application the data.

- `AppVisuals` relays the status of the session. Here you find a visual of a hourglass, paired with two elements displaying the current session and the detailed time left in the session (in the `mm:ss` format).

- `AppControls` includes the buttons to start/pause and reset the timer.

- `AppInputs` allows to tweak the settings behind the application. With input elements and buttons to alter the length of the sessions.

**svg**

The buttons shown in the last two components nest each an `<svg>` element, visually portraying the purpose of each one of them. These SVG assets are included as stateless functional components and imported as needed. They are stored in a nested folder as their purpose is solely the rendering of a visual.

These are:

- `PlayButton`, rendering a right-facing arrow. The visual is actually used in the `AppInputs` component as well for the increment and decrement buttons, so its name might be modified to respect that.

- `PauseButton`, rendering two rectangle elements side by side. As noted in the user stories, there exist a single button responsible to play and pause the timer. The idea with two SVG assets is to render the one or the other visual depending on the app's status.

- `ResetButton`, rendering a square. The design of the SVG might actually be subject to modifications, to relay its purpose a little better. Indeed the square is more connected to a `StopButton` (which was actually the purpose I had in mind before I read the user stories).

**css**

In yet another separate folder, CSS files are included to style the different components.

**State**

As the functionalities of the applications are included in `App.js`, through the state of the component, a bit of planning is warranted. Indeed, without preparation I previously found mystelf quite wasting considerable time shuffling from one component to another, trying to fit the requirements of each nested structure into the main component's state.

Starting with the app's functionalities:

- `AppVisuals` needs to update the application's UI in terms of 

  1. how much time is left;
  
  1. which session is currently ongoing (working or break). 
  
  The component scope is purely visual. It needs to simply re-render the elements with the updated values. As such, there is no need to specify methods to update the state, given that those will be isolated in `App.js`.

  Given the information the component needs, the state can specify an object nesting the following properties:

  - `isRunning`; a boolean describing whether or not the timer is running;

  - working; an integer specifying the length of the working session. It is perhaps useful to isolate such a variable as it wiill be updated throgh the `AppInputs` component;

  - `break`; an integer reflecting the same logic specified earlier, but with respect to the break session;

  - `timer`; itself an object specifying the `session`, its `minutes` and `seconds`. All values which the timer needs to consider. 
  
  I already realize how this structure is far from complete, but it is a good starting point for the first section of the application. By updating the values held in `state.timer`, in `App.js`, it ought to be possible to pass to the child components the exact values to render the appropriate UI.


- `AppControls` needs to 

  1. start and pause the timer;

  1. stop and reset the timer;
  
  1. update the UI of the button responsible for starting/stopping the timer to show the different SVG assets.

  Starting with this last point, as it is the most straightforward to implement, it is possible to leverage the `isRunning` property of the state, and toggle it whenever the play and pause button is clicked.

  Of course the button also needs a function which updates the state, and allows to flip the boolean from `true` to `false` and vice versa.

  ```JSX
  toggleIsRunning() {
    this.setState({
      isRunning: !this.state.isRunning
    });
  }
  ```

  The method, bound in the constructor function and passed as property to the child component, allows the button to show different SVG elements.

  ```JSX
  <button onClick={props.toggleIsRunning}>
    {
      props.isRunning ? <PauseButton />: <PlayButton />
    }
  </button>
  ```

  This solves only one point of the component's purpose, but one nice enough to warrant a prolonged explanation.

  In order to have the buttons actually update the timer and the session, and not just the buttons themselves, a few functions are included in the constructor.

  **Important**

  As I needed to keep track of the interval, to avoid overlapping instances and above all stop it as needed, I included a property in the state, which is updated with a reference to whichever interval is instantiated.

  ```JSX
  this.state = {
    interval: 0
  }
  ```

  - `startPauseTimer` initiates an interval if a timer is not running. If a timer is already running, it clears the existing one and does nothing else (so as to preserve the values displayed on the page). 
  
  ```JSX
  startPauseTimer() {
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
  ```

  This function can actually take the previous function into consideration, as to update the button UI appropriately. It is possible to either call the function itself.

  ```JSX
  startPauseTimer() {
    this.toggleIsRunning();
    // rest of the function 
  }
  ```
  

  - `timerIsRunning` is included, as visible in the previous function, to actually manage the timer. It is the function which gets called every second, and it updates the values of the timer according to what is expected from a timer counting down.

  ```JSX
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
  ```

  - `resetTimer` is finally defined to stop the timer (clearing the interval) and restoring the UI to its original status.

  ```JSX
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
  ```

  `startPauseTimer` and `resetTimer` are passed as properties to `AppControls` and included in the respective `onClick` attributes of the buttons rendered by the component.

  _Something to consider_

  Actually using the application first-hand made me realize how the logic of the timer is a little weak when it comes to include the value of `minutes`. Indeed minutes are included in the `working`, `break` and `timer.minutes` fields. I included a timer for clarity, to isolate its logic in the state, but it might not be the best solution. `working` and `timer.minutes` need to basically hold the same value, which is kind of a bother.

- `appInputs` needs to update the length of the different sessions, and that is achieved simply with a function which updates the state as needed.

  ```JSX
  incrementWorking() {
    let working = this.state.working;
    this.setState({
      working: working + 1
    });
  }
  ```

  Four variations of the described function, to increment and decrement the working and break session respectively. A few notes are however warranted:

  - the length of both sessions cannot exceed 60, nor go below 0. This is achieved by including different conditionals in the increment and decrement functions.

    ```JSX
    // increment if 
    if(working >= 0 && working < 60)
    // decrement if 
    if(working > 0 && working <= 60)
    ```

  - the change in input should occur only if the timer is not running. This choice should be matched visually by including perhaps a class which avoids the transition on hover/focus/active or perhaps include other visual cues.

    ```JSX
    if(!this.state.isRunning) {
      // increment/ decrement logic
    }
    ```

  - for the working session only, the change should occur for the `state.working` value as well as `state.timer.minutes`, to immediately change the UI.

**Closing Notes**

Following the previous notes, I got a first version of the application working. From there I got the time and the energy to go through the codebase and comment the code found in the different folders. 

Additionally, I updated the `AppVisuals` component to keep track of how much time is left in the session and change the variable responsible for the linear gradient accordingly.

```JSX
//  to update the hourglass UI, consider the length of the current session (in seconds), consider how much time is left (in seconds) and update the CSS variable responsible for the linear-gradient
let root = document.querySelector(":root");
let sessionLength = props[session] * 60;
let sessionLeft = minutes * 60 + seconds;

// the gradient variable needs to be updated with a percentage value
// range: from 100% when the timer begins, 0% when it ends
// to obtain the value divide the time left by the total time, retrieving a 0.x value which becomes smaller and smaller the more the timer continues
// multiply by 100 and round it to have a 100-0 range
let sessionPercentage = Math.floor(sessionLeft/sessionLength*100);
root.style.setProperty("--gradient-height", `${sessionPercentage}%`);
```

Finally, I considered the user stories to fulfill each one of them. As expected, the last user story, the one regarding playing the audio element, proved to be the most challenging. Not too challenging though. 

As necessary, I included an HTML `<audio>` element. In the main `App` component for the time being.

```JSX
return(
  <audio>
    <source src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav" type="audio/wav"/>
  </audio>
);
```

Before the `render` method, two functions are then included to play and stop the audio respectively.

```JSX
playAudio() {
  let audio = document.querySelector("audio");
  audio.play();
}
stopAudio() {
  let audio = document.querySelector("audio");
  if(!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
}
```

I am sure this approach is rather rough, and a bit of research will prove it to be extremely naive, but it accomplishes the final functionality of the application.

The functions are included as needed, in the function updating the state, as to play the audio when the timer hits `00:00`, and in the functions bound to the buttons, as to stop the audio when the timer is reset, but also when it is paused (personal preference to include this last option, as I feel the sound should stop whichever control is used).

_Small note_

Apparently, there is no need to bind the `playAudio` and `stopAudio` functions, but I need more research regarding as why. It is perhaps because they are not passed as argument to child components, or because they do not alter the state. Something else to research.