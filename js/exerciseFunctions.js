
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
  exerciseStarted=true
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause_btn.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pause_btn.innerHTML = 'PAUSE';
    exerciseStarted=true
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
  exerciseStarted=false
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
    
        .then(function() {
            console.log('text has been copied!')
        })
    }

  });

// const startinterval = document.getElementById('startinterval')
// startinterval.addEventListener('click', event => {
//   let tHour = document.getElementById('info');

//   let tSecond = 30;
  
//   dTime(tSecond);
  
//   const cDown = setInterval( () =>{
//       tSecond--;
//      // tHour.innerHTML = `00:${tSecond}`;
//      dTime(tSecond)
//       if(tSecond <= 0 || tSecond < 1){
//           eTime()
//           clearInterval(cDown)
//       }
  
//   },1000)
  
  
//   function dTime(second){
//       const min = Math.floor(second / 60);
//       const sec = Math.floor(second % 60);
//       tHour.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0': ''}${sec}`;
//   }
  
//   function eTime(){
//       tHour.innerHTML = "Time's Up!";
//   };
//   })


// This part taken from exercise page
let exerciseImageUrl = ""
let exerciseStarted=false
$(document).ready(function () {
  $('#startButton').click(
    function (e) {
      setTimeout(() => {
        document.getElementById("exerciseNameText").innerHTML = exerciseName;
        
        exerciseImageUrl = "Images/exercise_images/Optimized-"+exerciseName.split(" ").join("").toLowerCase() + ".jpg"
        
        console.log(exerciseImageUrl)
        exerciseImg=document.getElementById("exerciseImg")
        exerciseImg.setAttribute("src", exerciseImageUrl)
        exerciseStarted=true
        $('#modal').reveal({ // The item which will be opened with reveal
          animation: 'fade', // fade, fadeAndPop, none
          animationspeed: 600, // how fast animtions are
          closeonbackgroundclick: true, // if you click background modal will close
          dismissmodalclass: 'close' // the class of a button or element that will close an open modal
        })
        fetchJson()
        // Button which will activate our modal
      }, 2200)

     
      return false;
    });
});

function clickDice() {
  
  if(!exerciseStarted){
  start()}
  randomQuote()

}
function fetchJson(){
          
fetch("js/exerciseHelp.json")
.then(function (response) {
return response.json();
})
.then(function (data) {
// display exercises to html 
var tips=""
Object.keys(data).map(key => {
if(exerciseName==key){
data[key].map(value => {
tips+="<li>"+value+"</li>"
})

document.getElementById("exerciseTips").innerHTML=tips
}

})

})
.catch(function (err) {
console.log(err);
});
}