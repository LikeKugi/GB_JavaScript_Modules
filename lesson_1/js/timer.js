import { DateTime, Duration, Info, Interval, Settings } from "./luxon.js";

function getCurrentTime() {
  return DateTime.local();
}

export function startTimer() {
  const start = getCurrentTime();
}
