const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliSeconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener('click', pausetime);
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer )



function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliSeconds += 10;
      if (milliSeconds === 1000) {
        seconds++;
        milliSeconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliSeconds(milliSeconds);
    }
  }, 10);
  startBtn.style.display = 'none'
  pauseBtn.style.display = 'block'
}

function pausetime(){
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}


function resumeTimer(){
    isPaused = false
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
}

function resetTimer(){
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliSeconds = 0
    isPaused = false
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    millisecondsEl.innerHTML = "000";
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliSeconds(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}