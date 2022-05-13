
var allExerciseData=JSON.parse(window.localStorage.getItem('exercises'))
let dataArray=[]


var clicked=false;

var exerciseName=""

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight,1,1000)

camera.position.set(0,0,3)


var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#f8f9fa");
renderer.setSize(window.innerWidth ,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})
const exercises=allExerciseData.map(value=>value["exerciseName"])
const loader = new THREE.TextureLoader();
loader.load("../Images/dice-background/6.jpg" , function(texture)
            {
             scene.background = texture;  
            });

// Texture of dice
function getTexture(text) {
                const canvas = document.createElement("canvas");
                canvas.width = 500;
                canvas.height = 500;
                const context = canvas.getContext("2d");
                context.font ="70px Zen Dots";
                context.fillStyle = "#f8f9fa";
                context.fillRect(0, 0, 500, 500);
                context.fillStyle = "#124587";
                context.fillRect(2, 2, 496, 496);
                
                context.fillStyle = "#f8f9fa"
				        context.fillText(text, 70, 260);
             

  return new THREE.CanvasTexture(canvas);
}


var mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), [
    new THREE.MeshLambertMaterial({map: getTexture(exercises[0])}),
    new THREE.MeshLambertMaterial({map: getTexture(exercises[1])}),
    new THREE.MeshLambertMaterial({ map: getTexture(exercises[2])}), 
    new THREE.MeshLambertMaterial({ map: getTexture(exercises[3])}), 
    new THREE.MeshLambertMaterial({  map: getTexture(exercises[4])}),
    new THREE.MeshLambertMaterial({  map: getTexture(exercises[5])}),
  ]);
 
  mesh.position.set(0,0,0)
  mesh.recieveShadow=true
  scene.add(mesh)
  
  mesh.rotateOnAxis(new THREE.Vector3(2,2.1,0), 16 * Math.PI / 180)
    
  
		
function getRandomInt(max) {
  return Math.floor(Math.random() * max);}
  let random
function RandomExercise(e){

    switch (e) {
  case 0:
    //PLANKS
    mesh.lookAt(0,0,0)
    exerciseName=exercises[4]
    
    
    break;
  case 1:
    //CRUNCHES
    mesh.lookAt(0,1,0)
    exerciseName=exercises[3]
    
    break;
  case 2:
    //PULL UP
    mesh.lookAt(1,0,0)
    exerciseName=exercises[1]
    
    break;
  case 3:
      //LUNGES
    mesh.lookAt(0,0,-1)
    exerciseName=exercises[5]
    
    break;
  case 4:
    //SQUAT
    mesh.lookAt(0,-1,0)
    exerciseName=exercises[2]
   
    break;
  case 5:
    //PUSH UP
    mesh.lookAt(-1,0,0)
    exerciseName=exercises[0]
    
    break;
   
    
}
}


var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(0,0,0);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 2, 1000)
light.position.set(0,0,25);
scene.add(light);


var render = function() {
  if(clicked===true){
    random=getRandomInt(5)
      mesh.rotation.x+=1
      mesh.rotation.y+=1
      mesh.rotation.y+=1
     
     
    }
  
     
     
    
   
  
    requestAnimationFrame(render);
  
    renderer.render(scene, camera);
    window.onload = () => {
      document.getElementById("diceAnimation").appendChild( renderer.domElement )
  }
   
   
   
    
  
}

///
////////////////////////////////
////////////////////////////////////////
////////////////////////////////
// this part for modal functionality and other stuff
let dataFromStorage=JSON.parse(window.localStorage.getItem("exercises"))
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
   
      clicked=false
      resolve(exerciseName);
    }, 2000);
  });
}

async function asyncCall() {
  
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

function clickDice(){
  exerciseStarted=!exerciseStarted
  if(exerciseStarted){
    start();
   document.getElementById("startButton").style.display="none"
   
  }
  
}



document.getElementById("startButton").addEventListener("click", ()=>{
  clicked=true
  asyncCall().then(()=> {
    //this function comes from dice animation
    
    RandomExercise(random)
    document.getElementById("exerciseNameText").innerHTML = exerciseName;

    exerciseImageUrl = "Images/exercise_images/Optimized-" + exerciseName.split(" ").join("").toLowerCase() + ".jpg"

    console.log(exerciseName)
    exerciseImg = document.getElementById("exerciseImg")
    exerciseImg.setAttribute("src", exerciseImageUrl)
   
   
    $('#modal').reveal({ // The item which will be opened with reveal
      animation: 'fade', // fade, fadeAndPop, none
      animationspeed: 500, // how fast animtions are
      closeonbackgroundclick: false, // if you click background modal will close
      dismissmodalclass: 'close' // the class of a button or element that will close an open modal
    })
    
    fetchJson()
    countdownOrRep()
    randomQuote()
    dataForShareButton()
    clickDice()
    
    
  
  })
 

})
document.getElementById("newExercise").addEventListener("click", ()=>{
  clicked=true
  asyncCall().then(() => {
    RandomExercise(random)
    document.getElementById("exerciseNameText").innerHTML = exerciseName;

    exerciseImageUrl = "Images/exercise_images/Optimized-" + exerciseName.split(" ").join("").toLowerCase() + ".jpg"

    console.log(exerciseName)
    exerciseImg = document.getElementById("exerciseImg")
    exerciseImg.setAttribute("src", exerciseImageUrl)
   
   
    $('#modal').reveal({ // The item which will be opened with reveal
      animation: 'fade', // fade, fadeAndPop, none
      animationspeed: 500, // how fast animtions are
      closeonbackgroundclick: false, // if you click background modal will close
      dismissmodalclass: 'close' // the class of a button or element that will close an open modal
    })
    fetchJson()
    countdownOrRep()
    randomQuote()
    dataForShareButton()
  })


})
document.getElementById("timerClose").addEventListener("click", ()=>{
  clicked=true
  asyncCall().then(()=> {
    RandomExercise(random)
    document.getElementById("exerciseNameText").innerHTML = exerciseName;

    exerciseImageUrl = "Images/exercise_images/Optimized-" + exerciseName.split(" ").join("").toLowerCase() + ".jpg"

    console.log(exerciseName)
    exerciseImg = document.getElementById("exerciseImg")
    exerciseImg.setAttribute("src", exerciseImageUrl)
   
   
    $('#modal').reveal({ // The item which will be opened with reveal
      animation: 'fade', // fade, fadeAndPop, none
      animationspeed: 500, // how fast animtions are
      closeonbackgroundclick: false, // if you click background modal will close
      dismissmodalclass: 'close' // the class of a button or element that will close an open modal
    })
    fetchJson()
    countdownOrRep()
    randomQuote()
    dataForShareButton()
  })


})



function getExerciseFromDice(){
  if(exerciseName){


    document.getElementById("exerciseName").innerHTML=exerciseName
    
  }

  }

render();
getExerciseFromDice();




let exerciseImageUrl = ""
let exerciseStarted = false
let timerOrRepeat=""
let timerOrRepeatValue=""
let exerciseFinished=false
var pauseClicked=false;
var resetClicked=false;



  



function fetchJson() {

  fetch("js/exerciseHelp.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // display exercises to html 
      var tips = ""
      Object.keys(data).map(key => {
        if (exerciseName == key) {
          data[key].map(value => {
            tips += "<li>" + value + "</li>"
          })

          document.getElementById("exerciseTips").innerHTML = tips
        }

      })

    })
    .catch(function (err) {
      console.log(err);
    });
    
  
    for(let i=0;i<dataFromStorage.length;i++) {
      if(dataFromStorage[i].exerciseName===exerciseName){
        timerOrRepeat=dataFromStorage[i].exerciseMode 
        timerOrRepeatValue=dataFromStorage[i].exerciseValue
      }
    }
    
} 
function countdownOrRep(){
  if(timerOrRepeat==="Timer"){
    document.getElementById("ibox").style.display="inline"
    document.getElementById("ibox-repeat").style.display="none"
    document.getElementById("timerClose").style.display="none"
    console.log("timer")
    countdownTimeStart()
    

  }
  else if(timerOrRepeat==="Repeat"){
    document.getElementById("ibox").style.display="none"
    document.getElementById("ibox-repeat").style.display="inline"
    document.getElementById("repeatValue").innerHTML=timerOrRepeatValue
    console.log("rep")

  }
}

// timer for seconds 
function countdownTimeStart(){
  document.getElementById("demo").innerHTML = ""
  let countDownDate = new Date().getTime()+(timerOrRepeatValue*1000+1500);
 
  // Update the count down every 1 second
  var x = setInterval(function() {
    let now = new Date().getTime()
      // Get todays date and time
      
      var distance
      
     
      if(!pauseClicked&&!resetClicked){
         distance = countDownDate - now;
      }
      else if(pauseClicked){
        distance = distance
      }
      else if(resetClicked){
        clearInterval(x);
      }
       // Find the distance between now an the count down date
       
      
       // Time calculations for days, hours, minutes and seconds
      
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       // Output the result in an element with id="demo"
       
       var demo= document.getElementById("demo")
       demo.innerHTML = minutes + "m " + seconds + "s ";
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "";
          document.getElementById("timerClose").style.display="block"
      } 
  }, 1000);
  }
 
  function dataForShareButton(){
    
    for(let i=0;i<dataFromStorage.length;i++) {
      if(dataFromStorage[i].exerciseName===exerciseName){
          dataArray.push([dataFromStorage[i].exerciseName,dataFromStorage[i].exerciseMode,dataFromStorage[i].exerciseValue])
      }
    }
    
  }
  function dataForShare(){
      console.log(dataArray);
  }
    
  
