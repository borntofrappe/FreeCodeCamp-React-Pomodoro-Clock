_Notice_

The application is currently being developed with the `create-react-app` utility. It will be published on CodePen with most of its functionalities, hopefully soon.

<!-- Link to the working pen right [here](ADD WORKING PEN URL) -->

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

- [ ] there exist an element with `id="break-label` containing a string, as well as an element with `id="session-label` with again a string.

- [ ] there exist two clickable elements with `id="break-decrement` and `id="break-increment`, as well as two clickable elements with `id="session-decrement` and `id="session-increment`.

- [ ] there exist an element with `id="break-length` displaying `5` by default, as well as an elemen wih `id="session-length`, displaying by default `25`.

- [ ] there exist an element with `id="timer-label`, which is something I haven't included in my UI. This ought to contain a string indicating that the session is begun. (showing how the timer relays a working or break session)

- [ ] there exist an element with `id="time-left`, always displaying the remaining time in the `mm:ss` format.

- [ ] there exist a clickable element with `id="start_stop"`, which sort of ruins my original plans of showing three buttons, but something which can be easily fixed by including the different SVG assets depending on whether or not the timer is running.

- [ ] there exist a clickable element with `id="reset`.

- [ ] upon clicking on `#reset` the timer should stop and the default value for `id="break-length` and `id="session-length` should be restored (to `5` and `25`). The element with `id="time-left` should also be reset to its default state.

- [ ] when clicking on the _decrement_ and _increment_ buttons, the attachd value for the break and session length should be decremented and incremented respectively by 1.

- [ ] the length of a break or of a session ought to be in the `[1, 60]` range.

- [ ] upon clicking `#start_stop`, the timer should begin running from the displayed value.

- [ ] when the timer is running, it should be decremented every 1000ms and the UI should display a matching value in `#time-left`.

- [ ] if the timer is running, upon clicking `#start_stop`, the timer should pause. 

- [ ] if the timer is paused, upon clicking `#start_stop`, the timer should start again, from the paused value. 

- [ ] upon hitting `00:00`, a new timer should begin and the `#time-label` should relay of the change of session (from working to break and vice versa). Moreover, the timer should take the value from the respective _length_ element, `id="break-length` or `id="session-length`.

- [ ] upon hitting `00:00`, a sound should be played to notify that the session is over. It should make use of the `<audio>` element with `id="beep"`. The sound must be 1s or longer. The sound must cease when resetting the timer, even prior to its completion.

A long list of requirements if there is one. The UI I created for the project does not need major adjustments, just the few noted next to the different user stories. The main challenges seem to be:

- add a timer for the working and break sessions;

- add the audio when the timer hits zero.

I include this last point because I rarely incorporated audio in my projects. Updating the UI when the different buttons are clicked should be instead relatively simpler.

<!-- ## React.js -->