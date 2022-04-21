
var allExerciseData=JSON.parse(window.localStorage.getItem('exercises'))



var clicked=false;

var exerciseName=""

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000)

camera.position.set(0,0,4)


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
  console.log(exercises)
// Texture of dice
function getTexture(text) {
                const canvas = document.createElement("canvas");
                canvas.width = 500;
                canvas.height = 500;
                const context = canvas.getContext("2d");
                context.font ="110px Serif";
                context.fillStyle = "#f8f9fa";
                context.fillRect(0, 0, 500, 500);
                context.fillStyle = "#343a40";
                context.fillRect(2, 2, 496, 496);
                
                context.fillStyle = "#f8f9fa"
				        context.fillText(text, 70, 260);
             

  return new THREE.CanvasTexture(canvas);
}


var mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), [
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
  
  mesh.rotateOnAxis(new THREE.Vector3(-1.1,1.1,0), 16 * Math.PI / 180)
    
  
		
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
function chanceClick(){
  clicked=false
}

var render = function() {
  if(clicked===true){
    random=getRandomInt(5)
      mesh.rotation.x+=1
      mesh.rotation.y+=1
      mesh.rotation.y+=1
     
     
    }
    else{
     
     
     RandomExercise(random)
      
    }
  
    requestAnimationFrame(render);
  
    renderer.render(scene, camera);
    document.getElementById("diceAnimation").appendChild( renderer.domElement )
   
   
    
  
}



document.getElementById("startButton").addEventListener("click", ()=>{
clicked=true

setTimeout(()=>{clicked=false},2000)



})
function getExerciseFromDice(){
  if(exerciseName){


    document.getElementById("exerciseName").innerHTML=exerciseName
    console.log(exerciseName)
  }

  }

render();
getExerciseFromDice();


