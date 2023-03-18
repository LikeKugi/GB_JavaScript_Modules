import { DateTime } from "./luxon.js"; // , Duration, Info, Interval, Settings

export class Timer {
  /**
   * @package luxon.js required for time
   *
   * @param targetRender selector of an element that shows the timer
   * @param startEl selector of an element which starts the timer
   * @param endEl selector of an element which resets the timer
   */

  #targetRender;
  #startBtn;
  #endBtn;

  #timerID; // timer id for setInterval function

  constructor(
    targetRender,
    startEl = "#timer__start",
    endEl = "#timer__reset"
  ) {
    this.targetRender = targetRender;
    this.startBtn = startEl;
    this.startBtn.addEventListener("click", this.startTimer.bind(this));
    this.endBtn = endEl;
    this.endBtn.addEventListener("click", this.resetInterval.bind(this));

    this.#timerID = null;
  }

  set targetRender(val) {
    let el = document.querySelector(val);
    if (el) this.#targetRender = el;
    return false;
  }

  get targetRender() {
    return this.#targetRender;
  }

  set startBtn(val) {
    let el = document.querySelector(val);
    if (el) this.#startBtn = el;
    return false;
  }

  get startBtn() {
    return this.#startBtn;
  }

  set endBtn(val) {
    let el = document.querySelector(val);
    if (el) this.#endBtn = el;
    return false;
  }

  get endBtn() {
    return this.#endBtn;
  }

  getCurrentTime() {
    return DateTime.local();
  }

  startTimer() {
    console.log(DateTime.fromISO());
    this.startTime = this.getCurrentTime();
    if (this.#timerID) clearInterval(this.#timerID);
    this.#timerID = setInterval(this.renderTimer.bind(this), 100);
  }

  countInterval() {
    let currentTime = this.getCurrentTime();
    console.log(currentTime - this.startTime);
    return currentTime.diff(this.startTime).toFormat("hh:mm:ss:S");
  }

  resetInterval() {
    console.log("reseting");
    console.log(this.#timerID);
    clearInterval(this.#timerID);
  }

  renderTimer() {
    this.targetRender.textContent = this.countInterval();
  }
}
