  // Exercises from pop up table
  var exercises=[]
  var i;
  document.getElementById("goToExercisepage").onclick=function createExerciseObject(){
   
    for(var j=1;j<7;j++){
      
      i=j.toString()
     
      let exerciseName = document.getElementById(`selectExercise${i}`);
      let exerciseMode =  document.getElementById(`selectExerciseMode${i}`);
      let exerciseValue =  document.getElementById(`selectExerciseValue${i}`);
    
      let name =(exerciseName.options[exerciseName.selectedIndex].text)
      let mode =(exerciseMode.options[exerciseMode.selectedIndex].text)
      let value =(exerciseValue.options[exerciseValue.selectedIndex].text)
     
      exercises.push({
        
        "exerciseName":name,
        "exerciseMode":mode,
        "exerciseValue":value
      })
     
      window.localStorage.setItem('exercises', JSON.stringify(exercises) );
    }
    
 
   
   
    
    

    
 
  }



