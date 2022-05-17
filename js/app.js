if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('./service-worker.js')
      .then(registration => console.log('SW registered'))
    .catch(err => console.log(`SW not registered - Error: ${err}`))
  })
} else {
  console.log('Service Worker is not supported in this browser.')
}

function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    start();
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
      
      document.getElementById('roll-button').style.display = "none";
      document.getElementById('roll-button2').style.display = "block";
      console.log("here")
    });
  
}

function rollDice2() {
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
document.getElementById("roll-button2").addEventListener("click", rollDice2);


var exercises = [{"exercise":"1", "value":"Push Ups"}, 
                  {"exercise":"2", "value":"Squats"},
                {"exercise":"3", "value":"Crunches"},
                 {"exercise":"4", "value":"Jumping Jacks"},
                 {"exercise":"5", "value":"Lunges"},
                  {"exercise":"6", "value":"Planks"},
                  {"exercise":"7", "value":"Mountain Climbers"},
                  {"exercise":"8", "value":"High Knees"},
                  {"exercise":"9", "value":"Tricep Push Ups"},
                  {"exercise":"10", "value":"Butt Kicks"}
                ]

var arrayLength = exercises.length;
var min1 = 1;

function getRandomExercise1(min1, arrayLength) {
  min1 = Math.ceil(min1);
  arrayLength = Math.floor(arrayLength);
  return Math.floor(Math.random() * (arrayLength - 1 + 1)) + min1;
                }
randomNumber1 = getRandomExercise1(1, arrayLength);
randomNumber2 = getRandomExercise1(1, arrayLength);
randomNumber3 = getRandomExercise1(1, arrayLength);
randomNumber4 = getRandomExercise1(1, arrayLength);
randomNumber5 = getRandomExercise1(1, arrayLength);
randomNumber6 = getRandomExercise1(1, arrayLength);


var matchingExercise = exercises.filter(function (x) {return x.exercise == randomNumber1; });
console.log(matchingExercise);
var exerciseName1 = JSON.parse(JSON.stringify(matchingExercise));
var exerciseName1 = exerciseName1[0].value;


var matchingExercise2 = exercises.filter(function (x) {return x.exercise == randomNumber2; });
console.log(matchingExercise2);
var exerciseName2 = JSON.parse(JSON.stringify(matchingExercise2));
var exerciseName2 = exerciseName2[0].value;

var matchingExercise3 = exercises.filter(function (x) {return x.exercise == randomNumber3; });
console.log(matchingExercise3);
var exerciseName3 = JSON.parse(JSON.stringify(matchingExercise3));
var exerciseName3 = exerciseName3[0].value;


var matchingExercise4 = exercises.filter(function (x) {return x.exercise == randomNumber4; });
console.log(matchingExercise4);
var exerciseName4 = JSON.parse(JSON.stringify(matchingExercise4));
var exerciseName4 = exerciseName4[0].value;

var matchingExercise5 = exercises.filter(function (x) {return x.exercise == randomNumber5; });
console.log(matchingExercise5);
var exerciseName5 = JSON.parse(JSON.stringify(matchingExercise5));
var exerciseName5 = exerciseName5[0].value;


var matchingExercise6 = exercises.filter(function (x) {return x.exercise == randomNumber6; });
console.log(matchingExercise6);
var exerciseName6 = JSON.parse(JSON.stringify(matchingExercise6));
var exerciseName6 = exerciseName6[0].value;

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



//Capture each exercise
var roll1 = "";
var roll2 = "";
var roll3 = "";



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
  showBtn([pause_btn, done_btn]);
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
  hideBtn([pause_btn, done_btn]);
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

  //Share workout button start
  const shareBtn2 = document.getElementById('buttonShare')
  shareBtn2.addEventListener('click', event => {
  
      // Check for Web Share api support
      if (navigator.share) {
        // Browser supports native share api
        navigator.share({
          text: 'I just got FIIT with HIIT2;! I worked out for ' + toHHMMSS(time) + '! I did' + exerciseName1 + ', ' +  exerciseName2 + ', ' + exerciseName3 + ', ' + exerciseName4 + ', ' + exerciseName5 + ', and ' + exerciseName6 + '!',
          url: 'https://hiit2.netlify.app/'
        }).then(() => {
          console.log('Thanks for sharing!');
        })
          .catch((err) => console.error(err));
      } else {
        // Fallback
          navigator.clipboard.writeText(document.getElementById('share-text2').innerText)
      
          .then(function() {
              console.log('text has been copied!')
          })
      }
  
    });
  //Share workout button end
