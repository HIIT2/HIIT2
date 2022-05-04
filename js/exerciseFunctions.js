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
  exerciseStarted = true
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause_btn.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pause_btn.innerHTML = 'PAUSE';
    exerciseStarted = true
    pauseClicked=true;
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
  exerciseStarted = false
  resetClicked=true
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

// function hideBtn(btnArr) {
//   btnArr.forEach((btn) => (btn.style.display = 'none'));
// }

const shareBtn = document.getElementById('share_btn')
shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
        text: 'Check out my amazing workout',
        url: 'https://www.google.com/'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    navigator.clipboard.writeText(document.getElementById('share-text').innerText)

      .then(function () {
        console.log('text has been copied!')
      })
  }

});
function clickDice(){
  if(!exerciseStarted){
    start();
  }
  
}
