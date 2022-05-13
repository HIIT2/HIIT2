const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const reset_btn = document.querySelector('#reset_btn');

let time = 0, interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
  exerciseStarted = true
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
   
  } else {
    interval = setInterval(showTime, 1000);
    
    exerciseStarted = true
    pauseClicked=true;
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  
  time = 0;
  timer.innerHTML = toHHMMSS(time);
 
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

