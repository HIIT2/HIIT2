var exercises=["Push Up", "Pull Up", "Squat", "Crunches", "Planks", "Lunges"]

function getRandomDice(max) {
    return Math.floor(Math.random() * max)
}

function getExercise(){
    let choosenExercise=exercises[getRandomDice(exercises.length)]
   
    document.getElementById("exercise").innerHTML=`${choosenExercise}`
}

class Timer {
    constructor () {
      this.isRunning = false;
      this.startTime = 0;
      this.overallTime = 0;
    }
  
    _getTimeElapsedSinceLastStart () {
      if (!this.startTime) {
        return 0;
      }
    
      return Date.now() - this.startTime;
    }
  
    start () {
      if (this.isRunning) {
        return console.error('Timer is already running');
      }
  
      this.isRunning = true;
  
      this.startTime = Date.now();
    }
  
    stop () {
      if (!this.isRunning) {
        return console.error('Timer is already stopped');
      }
  
      this.isRunning = false;
  
      this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
    }
  
    reset () {
      this.overallTime = 0;
  
      if (this.isRunning) {
        this.startTime = Date.now();
        return;
      }
  
      this.startTime = 0;
    }
  
    getTime () {
      if (!this.startTime) {
        return 0;
      }
  
      if (this.isRunning) {
        return this.overallTime + this._getTimeElapsedSinceLastStart();
      }
  
      return this.overallTime;
    }
  }
  
  const timer = new Timer();
  
  setInterval(() => {
    const timeInSeconds = Math.round(timer.getTime() / 1000);
    document.getElementById('time').innerText = timeInSeconds;
  }, 100)

  function startTimer(){
    timer.start();
  }
  function stopTimer(){
    timer.stop();
  }
  function resetTimer(){
      timer.reset()

  }
  function addExercise(){
    const newExercise=document.getElementById("newExercise").value
    if(newExercise.length>0){
    var ul = document.getElementById("exerciseList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newExercise));
    ul.appendChild(li);
    document.getElementById("newExercise").value=""
    exercises.push(newExercise)
    alert(exercises)
    }
  }
 

  function displayExercises(){
      const list  = document.getElementById('exerciseList');
 
    window.onload = () => {
    list.innerHTML = exercises.map(item => `<li>${item}</li>`).join('');
};
  }
  displayExercises()
  