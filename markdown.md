Here is a clean, checklist-style roadmap for your **Pomodoro Timer**. You can copy this directly into a `README.md` file or a notes app to track your progress.

---

# 🍅 Project Roadmap: Vanilla JS Pomodoro

### Phase 1: Structure & Static UI

_Goal: Get the elements on the screen without any "brains" yet._

- [ ] Create `index.html`, `style.css`, and `script.js`.
- [ ] Add a `div` for the timer display (default text: `25:00`).
- [ ] Add three buttons: `id="start"`, `id="pause"`, and `id="reset"`.
- [ ] Center everything in the middle of the screen using CSS Flexbox.

### Phase 2: State & Selectors

_Goal: Connect your HTML to your JavaScript._

- [ ] Use `document.getElementById` or `querySelector` to grab the display and buttons.
- [ ] Create a variable `timeLeft` initialized to `1500` (seconds).
- [ ] Create a variable `timerId` (leave it null/undefined for now).
- [ ] Create a function `updateDisplay()` that converts `timeLeft` into `MM:SS` format.

### Phase 3: The Countdown Engine

_Goal: Make the numbers actually move._

- [ ] Create a `startTimer()` function.
- [ ] Inside, use `setInterval()` to subtract 1 from `timeLeft` every 1000ms.
- [ ] Call `updateDisplay()` inside that interval so the user sees the change.
- [ ] **Critical:** Add a check so the user can't click "Start" multiple times and break the clock.

### Phase 4: Controls & Logic

_Goal: Give the user power over time._

- [ ] Create `pauseTimer()`: Use `clearInterval(timerId)` to freeze the clock.
- [ ] Create `resetTimer()`: Clear the interval, set `timeLeft` back to 1500, and update the display.
- [ ] Attach all functions to buttons using `addEventListener('click', ...)`.

### Phase 5: Polish & "Juice"

_Goal: Make it feel like a real app._

- [ ] Add an `alert()` or a sound effect when the timer reaches `00:00`.
- [ ] Add a "Work" vs "Break" toggle (change the starting time from 25:00 to 05:00).
- [ ] Change the `document.title` so the user can see the countdown in their browser tab.

---

### Your First Step

The best way to start is to get the time appearing in your console before you even try to put it on the web page.

**Would you like the snippet of code that handles the `Math.floor` and `%` (modulo) logic to turn those 1500 seconds into a "25:00" string?**
