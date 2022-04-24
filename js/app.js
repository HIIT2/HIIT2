function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollDice);


var exerciseName1="Push Ups"
var exerciseName2="Squats"
var exerciseName3="Crunches"
var exerciseName4="Jumping Jacks"
var exerciseName5="Lunges"
var exerciseName6="Planks"

document.getElementById("exerciseName1").innerHTML="<h4>"+exerciseName1+"</h4>"
document.getElementById("exerciseName2").innerHTML="<h4>"+exerciseName2+"</h4>"
document.getElementById("exerciseName3").innerHTML="<h4>"+exerciseName3+"</h4>"
document.getElementById("exerciseName4").innerHTML="<h4>"+exerciseName4+"</h4>"
document.getElementById("exerciseName5").innerHTML="<h4>"+exerciseName5+"</h4>"
document.getElementById("exerciseName6").innerHTML="<h4>"+exerciseName6+"</h4>"


var interval1="30 seconds"
var interval2="20 seconds"
var interval3="10 seconds"
var reps1="20 reps"
var reps2="10 reps"
var reps3="5 reps"

document.getElementById("interval1").innerHTML="<h4>"+interval1+"</h4>"
document.getElementById("interval2").innerHTML="<h4>"+interval2+"</h4>"
document.getElementById("interval3").innerHTML="<h4>"+interval3+"</h4>"
document.getElementById("reps1").innerHTML="<h4>"+reps1+"</h4>"
document.getElementById("reps2").innerHTML="<h4>"+reps2+"</h4>"
document.getElementById("reps3").innerHTML="<h4>"+reps3+"</h4>"

//Count up timer
const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const reset_btn = document.querySelector('#reset_btn');

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
  hideBtn([start_btn]);
  showBtn([pause_btn, reset_btn]);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause_btn.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pause_btn.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  pause_btn.innerHTML = 'PAUSE';
  time = 0;
  timer.innerHTML = toHHMMSS(time);
  hideBtn([pause_btn, reset_btn]);
  showBtn([start_btn]);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}
